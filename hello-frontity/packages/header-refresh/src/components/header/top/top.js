import React from "react"
import { connect , styled } from "frontity";

const Top = (  ) => {
    return (
        <>
            <Div>
                <h1>I am a header</h1>
        </Div>
            </>
    )
}

export default connect(Top)

const Div =styled.div`
    background: grey;
    position: fixed;
    top: 0;
    left:0; right: 0;
    transform: translateY(0);
    transition: transform 1s ease;
    [data-hide="true"] & { transform: translateY(-100%); }
    
    `