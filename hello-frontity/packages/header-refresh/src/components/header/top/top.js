import React from "react"
import { connect , styled } from "frontity";
import Container from "../../helpers/container"
import SocialLinks from "./socialLinks";
import Menu from "./menu"
import Link from "@frontity/components/link"

const Top = (  ) => {
    return (
        <>
            <Div>
                <Container>
                    <logo />
                    <Link link="/" title="2459 Sqn"><h1>2459 Sqn</h1></Link>
                    <em>Poulton-le-Fylde</em>
                    <SocialLinks />
                    <Menu />
                </Container>
            </Div>
        </>
    )
}

export default connect(Top)

const Div =styled.div`
    background: var(--dark);
    color: var(--light);
    a:hover {
      color: var(--heading);
    }
  
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(0);
    transition: transform 1s ease;

    [data-hide="true"] & {
      transform: translateY(-100%);
    }   
    `