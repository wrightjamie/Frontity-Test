import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import SearchResults from "./search_results"

const List = ({ state , actions, libraries }) => {
    const data = state.source.get(state.router.link)
    const Html2React = libraries.html2react.Component

    return(
        <>
            {data.isSearch ? <SearchResults /> : null}
            <Items>
                {data.items.map((item) => {
                    const post = state.source[item.type][item.id]
                    return (
                        <Excerpt
                            colour={data.isDestinationsArchive ? "blue" : "green"}
                            key={item.id}>
                            <Link link={post.link}>
                                {post.title.rendered}
                            </Link>
                            <Html2React html={post.excerpt.rendered} />
                        </ Excerpt>
                    )
                })}
            </Items>
            <PrevNextNav>
                {data.previous && (
                    <button
                        onClick={() => {
                            actions.router.set(data.previous)
                        }}
                        >
                        &#171; Prev
                    </button>
                )}
                {data.next && (
                    <button
                        onClick={() => {
                            actions.router.set(data.next)
                        }}
                    >
                        Next &#187;
                    </button>
                )}
            </PrevNextNav>
        </ >
    )
}

export default connect(List)

const Excerpt = styled.div`
    display:block;
    background: ${props => props.colour || "yellow"};
    `

const Items = styled.div`
    &>a{
        display: block;
        margin: 6px 0;
        font-size: 1.2em;
        color: steelblue;
        text-decoration: none;
    }
`

const PrevNextNav = styled.div`
    padding-top:1.5em;
    
    & > button {
        background: #eee;
        text-decoration: none;
        padding: 0.5em 1em;
        color: #888;
        border: 1px solid #aaa;
        font-size: 0.8em;
        margin-right: 2em;
    }
    & > button:hover {
       cursor: pointer;
    }
`