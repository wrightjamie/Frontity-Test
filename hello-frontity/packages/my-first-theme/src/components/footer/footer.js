import React from "react"
import { connect, styled } from "frontity"
import SocialLinks from "../header/socialLinks";
import Menu from "../header/menu";


const Footer = ({ state }) => {

    return (
            <Div>
                <FooterContainer>
                    <SocialLinks />
                    <Menu data={state.theme.menu} />
                    <Menu data={state.theme.menu} />
                    <div>
                        RAF AC 2021
                    </div>
                </FooterContainer>
            </Div>
    )
}

export default connect(Footer)

const Div = styled.div`
    width:100%;
    background-color: var(--blue);
    }
`
const FooterContainer = styled.footer`
    max-width: 800px;
    padding: .5em 1em;
    margin: auto;
    `