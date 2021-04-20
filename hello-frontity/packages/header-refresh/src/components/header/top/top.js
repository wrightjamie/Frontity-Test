import React from "react"
import { connect , styled , css } from "frontity";
import Container from "../../helpers/container"
import SocialLinks from "./socialLinks";
import Menu from "./menu"
import Link from "@frontity/components/link"
import RAFAClogo from "./rafaclogo";
import RAFroundel from "./rafroundel";

const Top = (  ) => {
    return (
        <>
            <Div>
                <TopContainer>
                    <FlexCont>
                        <Link link="/" title="2459 Sqn">
                            <h1>2459 Sqn</h1>
                            <em>Poulton-le-Fylde</em>
                        </Link>
                        <A href="http://www.raf.co.uk/aircadets" >
                            <RAFAClogo />
                            <RAFroundel />
                        </A>
                    </FlexCont>
                    <MenuLinks>
                        <SocialLinks />
                        <Menu />
                    </MenuLinks>
                </TopContainer>
            </Div>
        </>
    )
}

export default connect(Top)

const A = styled.a`
  width:20rem;
  margin-left:auto;
`

const FlexCont = styled.div`
  display: flex;
`

const MenuLinks = styled(FlexCont)`
  margin-left: auto;
  align-items:flex-end;
`

const TopContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`

const Div =styled.div`
    background: var(--dark);
    color: var(--light);
    a:hover {
      color: var(--heading);
    }
  
    position: fixed;
    top: 0;
    left: 0; right: 0;
  
  
    transform: translateY(0);
    transition: transform 1s ease;

    [data-hide="true"] & {
      transform: translateY(-100%);
    }   
    `