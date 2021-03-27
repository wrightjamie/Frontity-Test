import React from "react"
import { connect , styled } from "frontity"
import Link from "@frontity/components/link"
import Icon from "../../icons/icon";
import Headroom from "react-headroom/src";
import overlay from "../overlay";


const Bottom = ({ state , actions }) => {

    const { bottom } = state.theme;
    const { hide, show , pinToggle, autoShow, autoHide} = actions.theme.bottom;
    return (
        <>
        <BottomContainer
            data-hidden={bottom.hidden}
        >
            <Div
                disableInlineStyles
                onPin={autoShow}
                onUnpin={autoHide}
                style={{
                    maxWidth: '800px',
                    margin: 'auto',
                    padding: '.25rem 1rem',
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
            <Button title="search">
                <Icon icon="search" size="2" />
                <div>search</div>
            </Button>

            <Controls>
                <Button onClick={pinToggle} data-pinned={bottom.pinned} ><Icon icon="pushpin" size="1.5" /></Button>
                <Button onClick={hide} ><Icon icon="arrowDown" size="1.5" /></Button>
            </Controls>
            </Div>
        </BottomContainer>

        <ShowBottom >
            <ClearButton onClick={show} ><Icon icon="arrowUp" size="2"/></ClearButton>
        </ShowBottom>
        <Search data-open={bottom.search}/>
        <Overlay data-open={bottom.overlay}/>
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
  transition: transform .5s ease-in-out;

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
    transition: transform .5s, opacity .5s;
    &:hover { opacity: 1; }
  
    [data-hidden="true"] + & {
      transform: translateY(0);
    }
`

const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: var(--heading);
  padding: .5rem;
  border-radius: .25rem;
  outline: none;
  width:100%; height: 100%;
  flex: 2 2 0;
  &:hover {
    background: var(--light);
  }
  [data-hidden="false"] &[data-pinned="true"] {
    color:var(--red);
  }
`


const ClearButton = styled(Button)`
  &:hover { background: none; }
`
//TODO Logic here isn't right.
const Search = styled.div`
  position:fixed;
  z-index: 50;
  left: 0; bottom: 0rem;
  transition: transform .5s ease-in-out;
  height: 5rem;
  width: 100%;
  background: var(--light);
  [data-hidden="false"] ~ &{
    transform: translateY(0rem);
  }
  [data-hidden="false"] ~  &[data-open="true"]{
    transform: translateY(-5rem);
  }
`

const Overlay = styled.div`${overlay}`