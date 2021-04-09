import React from "react"
import { connect , styled } from "frontity"
import Lorems from "./lorems"
import Header from "./header/header";


const Root = () => {
    return (
        <>
            <Header />
            <Container>
                <Lorems n={20} />
            </Container>
        </>
    )
}

export default Root

const Container = styled.div`
    max-width: 800px;
    margin: 0 auto;
    `