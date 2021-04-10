import React from "react"
import { connect , css } from "frontity";
import Top from "./top/top";
import Bottom from "./bottom/bottom";
import SmartHeader from "./smartHeader";

const Header = ({ }) => {
    return (
        <SmartHeader>
            <Top />
            <Bottom />
        </SmartHeader>
    )
}

export default connect(Header)
