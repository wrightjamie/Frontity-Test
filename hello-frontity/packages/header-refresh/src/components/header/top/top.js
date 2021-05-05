import React from "react"
import { connect , styled , css } from "frontity";
import Container from "../../helpers/container"
import MenuLinks from "./menuLinks";
import Link from "@frontity/components/link"
import RAFAClogo from "./rafaclogo";
import RAFroundel from "./rafroundel";
import mq from "../../mq"

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
                        <LogoLink href="http://www.raf.co.uk/aircadets" >
                            <RAFAClogo />
                            <RAFroundel />
                        </LogoLink>
                    </FlexCont>
                    <MenuLinks />
                </TopContainer>
            </Div>
        </>
    )
}

export default connect(Top)

const LogoLink = styled.a`
  width: var(--logoWidth); //Magic Number to give a nice size
  margin-left:auto;
  #roundel { display:none;}
  ${mq[0]}{
    position:absolute;
    left:.5rem;top:.5rem;
    #roundel {
      display:block; 
      height: var(--roundelSize); //Magic Number for a nice size
    }
    #logo {display:none;}
  }
`

const FlexCont = styled.div`
  display: flex;
  ${mq[0]} {
    padding-left:calc(var(--roundelSize) + 0.5rem);
    em {
      display: none;
    }
  }
`

const TopContainer = styled(Container)`
  padding: 0.5rem 1rem;
  
  display: flex;
  flex-direction: column;
  ${mq[0]}
  {
    flex-direction: row;
  }
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
      transform: translateY(
              min(
                      -100%,
                      calc( ( var(--roundelSize) + .5rem) * -1)
              );
    }   
    `