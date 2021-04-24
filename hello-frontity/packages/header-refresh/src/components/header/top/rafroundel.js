import React from "react"
import { connect, css } from "frontity"

const RAFroundel = ({

                   }) => {

    return (
        <svg
            id="roundel"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 620 620"
        >
            <circle cx="310" cy="310" r="310" css={css`fill:var(--white);`} />
            <circle cx="310" cy="310" r="300" css={css`fill:var(--blue);`}/>
            <circle cx="310" cy="310" r="200" css={css`fill:var(--white);`} />
            <circle cx="310" cy="310" r="100" css={css`fill:var(--red);`}/>
        </svg>

    )
}

export default connect(RAFroundel)
