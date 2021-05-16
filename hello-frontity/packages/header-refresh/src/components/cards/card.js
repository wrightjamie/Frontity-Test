import React from "react"
import { connect, styled } from "frontity"

const Card = ({ children }) => {
    return (
        <Div>
            {children}
        </Div>
    )
}

export default connect(Card)

const Div = styled.section`
    display:block;
    &:hover{
      box-shadow: 0px 10px 9px 0px rgba(0, 0, 0, 0.4), 0 3px 25px 0 rgba(0, 0, 0, 0.3);
    }
    
    transition: all .5s ease-in-out;
    border-radius: .5em;
    position:relative;
    overflow: hidden;
    
    box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
  
    `
