import React from "react"
import { connect, Head} from "frontity"
import PostInfo from "./PostInfo"
import FeaturedMedia from "./featured_media";

const Home = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const image = state.source.attachment[post.featured_media]
    const Html2React = libraries.html2react.Component

    return (
        <div>
            <Head>
                <title>{post.title.rendered}</title>
                <meta name="description" content={post.excerpt.rendered} />
            </Head>
            <h2>{post.title.rendered}</h2>
            <FeaturedMedia id={post.featured_media} />

            <h4>{image ? image.source_url : null}</h4>
            <Html2React html={post.content.rendered} />
        </div>
    )
}

export default connect(Home)
