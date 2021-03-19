import {connect, styled} from "frontity";
import Icon from "./icon";

const FacebookIcon =({ state }) => {
    const {path, viewBox} = state.theme.icons.rss;

    return (
        <Icon path={path} viewBox={viewBox} />
    )
}

export default connect(FacebookIcon)