import {connect, styled} from "frontity";

const Icon = ({
                  state,
                  icon = "facebook",
                  color = "currentColor",
                  size = 1.2,
                sizeUnits = "em",
}) => {

    const {path, viewBox} = state.theme.icons[icon];

    return (
        <SVG
            width={`${size}${sizeUnits}`}
            height={`${size}${sizeUnits}`}
            viewBox={viewBox}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path fill={color} d={path} />
        </SVG>
    )
}

export default connect(Icon)

const SVG = styled.svg`
    display: inline-block;
    vertical-align: middle;
`