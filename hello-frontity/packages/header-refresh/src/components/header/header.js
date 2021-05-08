import React from "react"
import { connect , css , styled } from "frontity";
import Top from "./top/top";
import Bottom from "./bottom/bottom";
import SmartHeader from "./smartHeader";
import HiddenBottom from "./bottom/hiddenBottom";
import HiddenTop from "./top/hiddenTop";
import mq from "../mq"

const Header = ({ actions }) => {
    return (
        <SmartHeader>
            <Overlay onClick={actions.theme.toggleShowMenu} />
            <HiddenTop />
            <Top />
            <HiddenBottom />
            <Bottom />
        </SmartHeader>
    )
}

export default connect(Header)

const Overlay = styled.div`
  display:none;
  position: fixed;  
  top:0; bottom: 0;
  width:100%;
  background: rgba(.2,.2,.2,0.5);
  backdrop-filter:blur(4px);
  left:-9999px;
  [data-menu="true"] & {
    left:0;
  }
  ${mq[0]} {
    display:block;
  }
    `