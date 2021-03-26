import React from "react"
import { connect , styled } from "frontity"
import Link from "@frontity/components/link"
import Icon from "../../icons/icon";
import Headroom from "react-headroom/src";


const Bottom = ({ state , actions }) => {

    const { bottom } = state.theme;
    const { hideBottom, showBottom , pinBottomToggle} = actions.theme;
    return (
        <>
        <BottomContainer
            data-hidden={bottom.hidden}
        >
            <Div
                disableInlineStyles
                onPin={showBottom}
                onUnpin={hideBottom}
                style={{
                    maxWidth: '800px',
                    margin: 'auto',
                    padding: '0 1rem',
                    display:'flex',
                    alignItems: 'stretch',
                    height:'5rem'
                }}
            >
            {state.theme.social.map(([title, type, link], index) =>(
                <StyledLink key={index} link={link} title={title}>
                    <Icon icon={type} size="2" />
                    <div>{title}</div>
                </StyledLink>
            ))}
            <Controls>
                <Button onClick={pinBottomToggle} ><Icon icon="pushpin" size="2" /></Button>
                <Button onClick={hideBottom} ><Icon icon="arrowDown" size="2" /></Button>
            </Controls>
            </Div>
        </BottomContainer>
        <ShowBottom >
            <Button onClick={showBottom} ><Icon icon="arrowUp" size="2"/></Button>
        </ShowBottom>
        </>
    )
}

export default connect(Bottom)




const BottomContainer = styled.div`
  position:fixed;
  z-index: 100;
  bottom:0;
  left:0;
  width:100%;

  background: var(--text);

  transform: translateY(0);
  transition: transform 1s ease-in-out;

  &[data-hidden="true"] {
    transform: translateY(5rem);
  }
`

const Div = styled(Headroom)`

    `

const StyledLink = styled(Link)`
  flex: 2 2 0;
  display:flex;
  align-items: center;
  flex-direction: column;
  color: var(--heading);
  justify-content: center;
  text-decoration: none;
  &:hover{
    background: var(--light);
    text-decoration: underline;
  }
`

const Controls = styled.div`
  flex: 0 0 auto;
  display:flex;
  align-items: center;
  flex-direction: column;
  color: var(--heading);
  justify-content: space-evenly;
`

const ShowBottom = styled.div`
    position:fixed;
    z-index: 200;
    bottom: 1rem;
    right: 1rem;
    transform: translateY(calc( 100% + 1rem ));

    opacity: 0.3;
    transition: transform 1s, opacity .5s;
    &:hover { opacity: 1; }
  
    [data-hidden="true"] + & {
      transform: translateY(0);
    }
`

const Button = styled.button`
`
