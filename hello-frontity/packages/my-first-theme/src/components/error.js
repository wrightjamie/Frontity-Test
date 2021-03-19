import React from "react"
import { connect } from "frontity"

const Error = ({ state }) => {
    return (
        <>
            <h2>404 Error</h2>
            <p>
                THe path <em>{state.router.link}</em> cannot be found.
            </p>
        </>
    )
}

export default connect(Error)