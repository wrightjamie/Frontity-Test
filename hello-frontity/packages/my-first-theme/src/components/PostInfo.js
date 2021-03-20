import dayjs from "dayjs";
import {connect, styled} from "frontity";

const PostInfo = ({ state  }) => {
    const data = state.source.get(state.router.link)
    const post = state.source[data.type][data.id]
    const author = state.source.author[post.author]
    const formattedDate = dayjs(post.date).format("DD MMM YYYY")

    return (
        <Info>
            <p>
                <strong>Posted: </strong>
                {formattedDate}
            </p>
            <p>
                <strong>Author: </strong>
                {author.name}
            </p>
       </Info>
    )
}


export default connect(PostInfo)

const Info = styled.div`
    background-image: linear-gradient(to right, #f4f4f4, #fff);
    margin-bottom: 1em;
    padding: 0.5em;
    border-left: 4px solid lightseagreen;
    font-size: 0.8em;
    
    & > p {
        margin: 0;
    }
`