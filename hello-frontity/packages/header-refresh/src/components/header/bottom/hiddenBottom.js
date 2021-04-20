import React from "react"
import {connect, css, styled} from "frontity";
import Icon from "../icon";

const HiddenBottom = ({ actions }) => {
    return (
        <>
            <Div>
                <Button onClick={actions.theme.tempShowHeaders} ><Icon icon="arrowUp" size="1.5" /></Button>
            </Div>
        </>
    )
}

export default connect(HiddenBottom)

const Div =styled.div`
    position: fixed;
    display: flex;
    justify-content: flex-end;
    bottom: 0;
    left:0; right: 0;
    transform: translateY(0);
    transition: transform 1s ease;
    [data-hide="false"] & { transform: translateY(100%); }
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
