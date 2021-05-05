import React from "react"
import {connect, styled} from "frontity"
import Link from "@frontity/components/link"
import Icon from "../icon"


const SocialLinks = ({ state , className}) => {

    return (
        <>
            <UL className={className}>
                {state.theme.menus.social.map(([title, type, link], index) =>(
                    <li key={index}>
                        <Link link={link} title={title}>
                            <Icon icon={type} size="1.5" sizeUnits="em"/>
                        </Link>
                    </li>
                ))}
            </UL>
        </>
    )
}

export default connect(SocialLinks)

const UL = styled.ul`
  padding: 0 .5rem;
  list-style: none;
  display:flex;
  gap: .5em;
`