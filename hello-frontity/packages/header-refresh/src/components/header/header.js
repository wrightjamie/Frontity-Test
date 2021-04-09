import React from "react"
import { useEffect } from "react"
import { connect , styled , css } from "frontity";
import Top from "./top/top";
import Bottom from "./bottom/bottom";

const Header = ({ state, actions }) => {
    const { scrollDirStates , positionStates , pinnedStates , topTolerance , bottomTolerance } = state.theme.enum
    const throttle = (callback, limit) => {
        var wait = false;                  // Initially, we're not waiting
        return function () {               // We return a throttled function
            if (!wait) {                   // If we're not waiting
                callback.call();           // Execute users function
                wait = true;               // Prevent future invocations
                setTimeout(function () {   // After a period of time
                    wait = false;          // And allow future invocations
                }, limit);
            }
        }
    }
    const getScrollPosition = () => {
        if (typeof window === 'undefined') {
            return 0
        }
        return (
            window.pageYOffset ||
            document.documentElement.scrollTop ||
            document.body.scrollTop ||
            0
        )
    }
    const setPosition = (current) => {
        return ( current < topTolerance ? positionStates.TOP :
                (window.innerHeight + current + bottomTolerance > document.body.offsetHeight ?
                    positionStates.BOTTOM : positionStates.MID)
            )
    }
    const setScrollDir = (current, prev) => {
        return (
            current == prev ? scrollDirStates.NONE :
                (current > prev ? scrollDirStates.DOWN : scrollDirStates.UP )
        )
    }

    const handleDocumentScroll = () => {
        const prevPos = state.theme.scroll.currentPos;
        const currentPos = getScrollPosition()

        state.theme.scroll.position = setPosition( currentPos )
        state.theme.scroll.scrollDir = setScrollDir( currentPos , prevPos )

        actions.theme.scroll()


        state.theme.scroll.currentPos = currentPos
    }
    const hideHeader = () => {
        const pinnedState = state.theme.scroll.pinnedState
        const dir = state.theme.scroll.scrollDir
        const position = state.theme.scroll.position

        switch (pinnedState) {
            case pinnedStates.TEMP:
                state.theme.scroll.pinnedState = pinnedStates.NONE
                return false
            case pinnedStates.HIDDEN:
                return true
            case pinnedStates.PINNED:
                return false
            case pinnedStates.NONE:
                switch (position) {
                    case positionStates.TOP:
                        return false
                    case positionStates.BOTTOM:
                        return false
                    case positionStates.MID:
                        return ( dir == scrollDirStates.DOWN ? true : false )
                }
        }
    }

    const handleDocumentScrollThrottled = throttle(handleDocumentScroll, 100)

    useEffect(() => {
        window.addEventListener("scroll", handleDocumentScrollThrottled);

        return () => {
            window.removeEventListener('scroll', handleDocumentScroll)
        }

}, []);


    return (
        <div data-hide={actions.theme.scroll.hide}>
            <Top />
            <Bottom />
            <button
                onClick={actions.theme.tempHide}
                css={css`
                    position: fixed;
                    top:50%;
                    left:50%;
                `}
            >A Button</button>
        </div>
    )
}

export default connect(Header)
