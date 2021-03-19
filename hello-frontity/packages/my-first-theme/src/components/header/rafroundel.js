import React from "react"
import { connect, css } from "frontity"
import mq from "../mq"

const RAFroundel = ({

                   }) => {

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8em"
            height="8em"
            viewBox="0 0 620 620"
            css={css`
                position:absolute;
                transition: left .2s ease-in-out, top .2s ease-in-out;
                left:-8em; top:-8em;
                ${mq[0]} {
                    left:-4em; top:-4em;
                    transition: left .2s ease-in-out, top .2s ease-in-out;
                }
                `}
        >
            <circle cx="310" cy="310" r="310" css={css`fill:var(--white);`} />
            <circle cx="310" cy="310" r="300" css={css`fill:var(--blue);`}/>
            <circle cx="310" cy="310" r="200" css={css`fill:var(--white);`} />
            <circle cx="310" cy="310" r="100" css={css`fill:var(--red);`}/>
        </svg>

    )
}

export default connect(RAFroundel)
