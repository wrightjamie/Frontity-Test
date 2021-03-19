import {css} from "frontity";

const underline = css`

    position:relative;

    &:hover{
        color: var(--color, var(--light, #FFFFFF));
		transition: color .2s ease-in-out;
    }
    &:after{
		content: '';
		position: absolute;
		bottom: calc( -1 * var(--gap, 0.5em) );
		left: 50%;
		width:0;
		background-color: var(--color, var(--light, #FFFFFF));
		height: var(--height, 0.25em);    
		transition: opacity .2s ease-in-out, width .2s ease-in-out, left .2s ease-in-out;
		opacity:0;
    }
    &:hover:after{
        opacity: 1;
        width: 100%;
        left: 0;
    }
    `

export default underline