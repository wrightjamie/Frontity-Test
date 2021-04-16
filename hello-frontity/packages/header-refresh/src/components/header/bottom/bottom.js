import React from "react"
import {connect, css, styled} from "frontity";
import Container from "../../helpers/container"
import Icon from "../icon";
import Link from "@frontity/components/link"

const Bottom = ({ state , actions }) => {
    return (
        <>
            <Div>
                <BottomContainer>
                    {state.theme.menus.bottomLinks.map(([title, type, link], index) =>(
                        <StyledLink key={index} link={link} title={title}>
                            <Icon icon={type} size="2" />
                            <div>{title}</div>
                        </StyledLink>
                    ))}
                    <Button title="search" onClick={console.log("search")}>
                        <Icon icon="search" size="2" />
                        <div>Search</div>
                    </Button>

                    <Controls>
                        <PinButton onClick={actions.theme.togglePinHeaders} ><Icon icon="pushpin" size="1.5" /></PinButton>
                        <Button onClick={actions.theme.hideHeaders} ><Icon icon="arrowDown" size="1.5" /></Button>
                    </Controls>
                </BottomContainer>
            </Div>
        </>
    )
}

export default connect(Bottom)

const Div =styled.div`
      background: var(--dark);
      color: var(--light);
  
    position: fixed;
    bottom: 0;
    left:0; right: 0;
    transform: translateY(0);
    transition: transform 1s ease;
    [data-hide="true"] & { transform: translateY(100%); }
    `
const BottomContainer = styled(Container)`
    display:flex;
`

const BottomLink = css`
  text-align: center;
  font-size: 1rem;
  line-height: 1.5;
  padding: .5rem;
  background: none;
  border: none;
  border-radius: .25rem;
  color: var(--heading);
  &:hover {
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

const StyledLink = styled(Link)`
  ${BottomLink};
  flex: 2 2 0;
  display:flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

const Button = styled.button`
  ${BottomLink};
  cursor: pointer;
  outline: none;
  flex: 2 2 0;
`
const PinButton = styled(Button)`
  [data-pinned="true"] & {
    color:var(--red);
  }
`
