import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"
import Icon from "../icon"


const SocialLinks = ({ state , className}) => {

    return (
        <>
            <div className={className}>
                {state.theme.menus.social.map(([title, type, link], index) =>(
                    <Link key={index} link={link} title={title}>
                        <Icon icon={type} size="1.5" />
                    </Link>
                ))}
            </div>
        </>
    )
}

export default connect(SocialLinks)

