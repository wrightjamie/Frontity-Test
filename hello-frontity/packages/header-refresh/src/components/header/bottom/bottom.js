import React from "react"
import { connect , styled } from "frontity";

const Bottom = (  ) => {
    return (
        <>
            <Div>
                <h1>I am floating bottom</h1>
        </Div>
            </>
    )
}

export default connect(Bottom)

const Div =styled.div`
    background: grey;
    position: fixed;
    bottom: 0;
    left:0; right: 0;
    transform: translateY(0);
    transition: transform 1s ease;
    [data-hide="true"] & { transform: translateY(100%); }
    `