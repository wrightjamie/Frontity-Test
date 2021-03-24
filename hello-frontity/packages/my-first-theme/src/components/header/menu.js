import React from "react"
import { connect } from "frontity"
import Link from "@frontity/components/link"


const Menu = ({ state , data, className}) => {

    return (
        <ul className={className}>
            {data.map(([name, link], index) => (
                <li key={name} >
                    <Link
                        iscurrentpage={state.router.link === link ? 1 : 0}
                        link={link}
                        index={`0${index + 1}`}
                    >
                        {name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default connect(Menu)

