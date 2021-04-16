import React from "react"
import {connect, css, styled} from "frontity";
import Container from "../../helpers/container"
import Icon from "../icon";

const HiddenBottom = ({ actions }) => {
    return (
        <>
            <Div>
                <BottomContainer>
                    <Button onClick={actions.theme.tempShowHeaders} ><Icon icon="arrowUp" size="1.5" /></Button>
                </BottomContainer>
            </Div>
        </>
    )
}

export default connect(HiddenBottom)

const Div =styled.div`
    position: fixed;
    bottom: 0;
    left:0; right: 0;
    transform: translateY(0);
    transition: transform 1s ease;
    [data-hide="false"] & { transform: translateY(100%); }
    `

const BottomContainer = styled(Container)`
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
