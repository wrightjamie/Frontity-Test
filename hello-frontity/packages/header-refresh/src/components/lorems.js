import React from "react";
import {connect , styled} from "frontity";
import Card from "./cards/card";

const Lorems = ( {n} ) => {
    return (
        <>
            {[...Array(n)].map((e, i) => <Lorem key={i} />)}
        </>
    )
}

export default connect(Lorems)


const Lorem = () => {
    return (
        <Card>
            <h2>Hello Thomas</h2>
            <p>
                <i><Big>S</Big>mile - its </i> <EM>poo </EM>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci consequatur dignissimos dolorem, doloribus eaque enim excepturi facilis maiores modi nisi non numquam obcaecati placeat rem repudiandae sequi. Fugit?
            </p>
            <p>Thomas is the best</p>
        </Card>
    )
}

const EM = styled.em`
    color: brown;
    background: yellow;
  text-decoration: underline;
  font-size: xx-large;
    `

const Big = styled.span`
  font-size: xxx-large;
    `