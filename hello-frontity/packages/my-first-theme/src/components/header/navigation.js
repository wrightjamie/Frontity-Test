import React from "react"
import { connect, styled } from "frontity"
import SocialLinks from "./socialLinks";
import Menu from "./menu"

import underline from "./underline";
import mq from "../mq"
import Icon from "../icons/icon";



const Navigation = ({ actions , state}) => {
    const { closeModals, openSearchModal, openMenuModal } = actions.theme;
    //TODO use ternary operator to combine menu open and close button. Use operator to change icon type.
    return (
        <>
            <HeaderNav>
                <MenuContainer
                    onClick={closeModals}
                >
                    <HeaderMenu data={state.theme.menus.menu}/>
                    <HeaderSocialLinks />
                </MenuContainer>
                <Button data-type="menu" onClick={openMenuModal}><Icon icon="menu" size={1.5}/></Button>
                <Button data-type="close" onClick={closeModals}><Icon icon="cross" size={1.5}/></Button>
            </HeaderNav>
        </>
    )
}

export default connect(Navigation)


const HeaderNav = styled.nav`
display:flex;
width:100%;
margin-bottom: 1em;
[data-type="menu"],
[data-type="close"] {
    display: none;
}
${mq[0]} {
  & [data-type="menu"] {
    display: block;
  }

  [data-modals~="menu"] & {
    [data-type="close"] {
      display: block;
    }

    [data-type="menu"] {
      display: none;
    }
  }
}
`

const MenuContainer = styled.div`
    display:flex;
    flex-grow:1;
    ${mq[0]} {
        position:absolute;
        top:3em; bottom: 0;
        left:0; right: 0;

        flex-direction: column;
        justify-content:center;


        transform: scaleY(0);
        transform-origin: top;
        transition: transform .2s ease-in-out;

        font-size: 1.5em;
        padding:0 0 6em 0;

        [data-modals~="menu"] & {
            transform:scaleY(1);
        }
        
        >ul { font-size: 2em; margin-bottom:.5em;}
        
    }
`

const Button = styled.button`
    align-items:flex-end;
    padding-left:1em;
    background: transparent;
    border: none;
    border-left:2px var(--heading) solid;
    color: var(--heading);
    transition: color var(--time) ease-in-out;
    
    &:hover{
        color: var(--light);
        cursor: pointer;
    }
    
    ${mq[0]} {
        font-size: 1.5em;
        border: none;
        &:first-of-type{
            margin-left:auto;
        }
    }
`


const HeaderMenu = styled(Menu)`

  
    display: flex;
    flex-direction: row;
    list-style: none;
    
    li {
        color: var(--heading);
        --color: var(--light);
        border-right: 2px  var(--heading) solid;
        padding: 0 .5em;
        &:first-of-type { padding-left: 0; }
        &:last-of-type { border: none; }
        
        ${underline}
    }


    a {
        padding: 0;
        text-decoration: none;
    }

    ${mq[0]} {
        flex-direction: column;
        order: 2;

        li {
            border: none;
            text-align: center;
        }
    }
`


const HeaderSocialLinks = styled(SocialLinks)`
    margin-left:auto;
    align-self: flex-end;
    >a {
        transition: color .2s ease-in-out;
        color: var(--heading);
        margin: 0 1em 0 0;
        &:hover {
           color: var(--light);
        }
    }
    
    ${mq[0]} {
        margin: 1em auto;
        >a {
            padding: .5em; margin: 1em 0;
        }    
    }
`