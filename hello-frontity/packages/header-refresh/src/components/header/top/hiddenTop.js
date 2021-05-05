import React from "react"
import { connect , styled } from "frontity";
import Container from "../../helpers/container"
import Icon from "../icon";

const HiddenTop = ({ actions }) => {
    return (
        <>
            <Div>
                <Button onClick={actions.theme.toggleShowMenu} ><Icon icon="menu" size="1.5" /></Button>
            </Div>
        </>
    )
}

export default connect(HiddenTop)

const Div =styled.div`
    color: var(--light);
    &:hover button,
    a:hover,
    button:hover{
      color: var(--heading);
    }

  display: flex;
  justify-content: flex-end;
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
