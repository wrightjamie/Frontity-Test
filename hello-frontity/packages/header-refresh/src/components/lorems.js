import React from "react"
import {connect} from "frontity";

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
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad adipisci consequatur dignissimos dolorem, doloribus eaque enim excepturi facilis maiores modi nisi non numquam obcaecati placeat rem repudiandae sequi. Fugit?
        </p>
    )
}