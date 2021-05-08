import React from "react"
import { connect , styled } from "frontity"
import Link from "@frontity/components/link"
import mq from "../../mq"


const Menu = ({ state , className}) => {

    return (
        <>
            <UL className={className}>
                {state.theme.menus.menu.map(([title, type, link], index) =>(
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
  display:flex;
  
  li a{
    border-right: solid 1px var(--accent);
    padding: 0 .5rem;
  }
  
  ${mq[0]} {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    li a{
      border-right:none;
    }
  }
`