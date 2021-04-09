import React from "react"
import { useEffect } from 'react'

let throttleWait;
const throttle = (callback, time) => {
    // if the variable is true, don't run the function
    if (throttleWait) return;

    // set the wait variable to true to pause the function
    throttleWait = true;

    // use setTimeout to run the function within the specified time
    setTimeout(() => {
        callback();

        // set throttleWait to false once the timer is up to restart the throttle function
        throttleWait = false;
    }, time);
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

export const useScroll = () => {
    useEffect(( timeout = 250) => {
        const handleDocumentScroll = () => {

            console.log(getScrollPosition())
        }

        const handleDocumentScrollThrottled = throttle(handleDocumentScroll, timeout)
        window.addEventListener('scroll', handleDocumentScrollThrottled)

        return () => {
            window.removeEventListener('scroll', handleDocumentScrollThrottled)
        }
    }, [])
}