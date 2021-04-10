import React from "react"
import { connect , css } from "frontity";
import Top from "./top/top";
import Bottom from "./bottom/bottom";
import SmartHeader from "./smartHeader";

const Header = ({ actions }) => {
    return (
        <SmartHeader>
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
        </SmartHeader>
    )
}

export default connect(Header)
