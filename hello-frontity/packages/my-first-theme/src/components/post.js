import React from "react"
import { connect, Head} from "frontity"
import PostInfo from "./PostInfo"
import FeaturedMedia from "./featured_media";
import Card from "./cards/card";

const Post = ({ state, libraries }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const Html2React = libraries.html2react.Component

    return (
        <Card>
            <Head>
                <title>{post.title.rendered}</title>
                <meta name="description" content={post.excerpt.rendered} />
            </Head>
            <h2>{post.title.rendered}</h2>
            <FeaturedMedia id={post.featured_media} />

            {data.isPost ? <PostInfo /> : null }
            <Html2React html={post.content.rendered} />
        </Card>
    )
}

export default connect(Post)
