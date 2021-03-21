import React from "react"
import { connect, styled } from "frontity"
import SocialLinks from "../header/socialLinks";
import Menu from "../header/menu";


const Footer = ({ state }) => {

    return (
        <>
            <Div>
                <FooterContainer>
                    <FooterSocialLinks />
                    <FooterMenu data={state.theme.menu} />
                    <FooterMenu data={state.theme.external} />
                    <FooterMenu data={state.theme.useful} />

                </FooterContainer>
            </Div>
            <Copyright>
                RAF AC 2021
            </Copyright>
        </>
    )
}

export default connect(Footer)

const Div = styled.div`
    width:100%;
    background-color: var(--blue);
    `

const FooterContainer = styled.footer`
    max-width: 800px;
    padding: .5em 1em;
    margin: auto;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    `
const FooterSocialLinks = styled(SocialLinks)`
    width: 100%;
`

const FooterMenu = styled(Menu)`
    font-size: 1.5em;
    flex: 0 1 auto;
    
  &:before{
    content: "\00BB";
    color: var(--accent);
    font-size:1.2em;
  }
    `
const Copyright = styled.div`
    width:100%;
    padding: 1em;
    background: var(--light);
    color: var(--text);
    `
