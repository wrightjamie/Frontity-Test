import React from "react"
import { connect , styled , css } from "frontity";
import SocialLinks from "./socialLinks";
import Menu from "./menu"
import mq from "../../mq"
import Icon from "../icon";

const MenuLinks = ({ actions }) => {
    return (
        <>
            <Div>
                <SocialLinks />
                <Menu />
            </Div>
            <ToggleMenu onClick={actions.theme.toggleShowMenu}>
                <Icon icon="menu" />
                <Icon icon="cross" />
            </ToggleMenu>
        </>
    )
}

export default connect(MenuLinks)


const ToggleMenu = styled.button`
  margin-left: auto;
  align-items:flex-end;
  display:none;

  cursor: pointer;
  outline: none;
  text-align: center;
  padding: .5rem;
  background: none;
  border: none;
  border-radius: .25rem;
  color: var(--heading);
  &:hover {
    background: var(--light);
    text-decoration: underline;
  }
  
  [data-menu="true"] & svg:first-of-type {
    display:none;
  }
  [data-menu="false"] & svg:last-of-type {
    display:none;
  }
  ${mq[0]} {
    display:block;
  }
  

`

const Div = styled.div`
  margin-left: auto;
  
  display: flex;
  flex-direction: row-reverse;
  align-items:flex-end;
  ${mq[0]} {
    position:fixed;
    left:0;
    
    &>*{padding:1rem;}

    width:80%;
    top:6rem;
    height: calc( 100vh - 15rem);
    padding: 0.5rem;

    flex-direction:column;
    align-items: center;

    background: var(--dark);
    font-size: 1.7rem;


    transform: translateX(-100%);
    transition: transform 1s ease;
    [data-menu="true"] & {
      transform: translateX(0);
    }
    
    
  }
`

