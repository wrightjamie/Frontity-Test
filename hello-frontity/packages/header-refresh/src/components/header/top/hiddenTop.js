import React from "react"
import { connect , styled } from "frontity";
import Container from "../../helpers/container"
import Icon from "../icon";

const HiddenTop = ({ actions }) => {
    return (
        <>
            <Div>
                <TopContainer>
                    <Button onClick={actions.theme.tempShowHeaders} ><Icon icon="menu" size="1.5" /></Button>
                </TopContainer>
            </Div>
        </>
    )
}

export default connect(HiddenTop)

const Div =styled.div`
    color: var(--light);
    a:hover,
    button:hover{
      color: var(--heading);
    }
  
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transform: translateY(0);
    transition: transform 1s ease;
   [data-hide="false"] & {
      transform: translateY(-100%);
    }   
    `

const TopContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
`

const Button = styled.button`
  padding: .5rem;
  background: none;
  color: var(--light);
  cursor: pointer;
  outline: none;
  border: none;
  &:hover {
    color: var(--heading)
  }
`
