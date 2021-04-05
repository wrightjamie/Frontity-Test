import React from "react"
import { connect, css, styled } from "frontity"
import Link from "@frontity/components/link"
import RAFAClogo from "./rafaclogo";

import underline from "./underline"
import mq from "../mq"

const TitlesSection = ({ }) => {

    return (
        <>
            <Div>
                <Titles>
                    <LinkTitle link="/">
                        <h1>2459<WideTitle> - RAF Air Cadets</WideTitle></h1>
                    </LinkTitle>
                    <SubTitle>Poulton-le-Fylde</SubTitle>
                </Titles>
                <Link
                    css={css`margin-left:auto;`}
                    link="http://www.raf.mod.uk/aircadets"
                >
                    <RAFAClogo />
                </Link>
            </Div>
        </>
    )
}

export default connect(TitlesSection)


const Div = styled.div`
display:flex;
margin-bottom: 1em;
`

const Titles = styled.div`
display:flex;
flex-direction:column;
transition: margin-left .2s ease-in-out;
${mq[0]} {margin-left: 3em;}
`

const LinkTitle = styled(Link)`
  
    color: var(--white);
    text-decoration:none;
    ${mq[0]} {font-size: 1.2em;}
    --gap: 0rem;
    --height:.2rem;
    --color: var(--light);
    ${underline}
`
const WideTitle = styled.span`
    ${mq[0]} {
        display:none;
    }
`

const SubTitle = styled.em`
    color: var(--accent);
    ${mq[0]} {
        display:none;
    }
`



