import React from "react"
import { connect , styled } from "frontity"
import Link from "@frontity/components/link"
import Icon from "../icon"


const Menu = ({ state , className}) => {

    return (
        <>
            <UL className={className}>
                {state.theme.menus.social.map(([title, type, link], index) =>(
                    <li key={index}>
                        <Link link={link} title={title}>
                            {title}
                        </Link>
                    </li>
                ))}
            </UL>
        </>
    )
}

export default connect(Menu)

const UL = styled.ul`
  list-style: none;
`