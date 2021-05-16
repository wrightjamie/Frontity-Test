import React from "react"
import { connect, styled } from "frontity"
import Link from "@frontity/components/link"
import Card from "./cards/card";
import FeaturedMedia from "./featured_media";

const List = ({ state , actions, libraries }) => {
    const data = state.source.get(state.router.link)
    const Html2React = libraries.html2react.Component

    return(
        <>
            {data.items.map((item) => {
                const post = state.source[item.type][item.id]
                return (
                    <Teaser key={item.id}>
                        <FeaturedMedia id={post.featured_media} />
                        <Link link={post.link}>
                            <h1>{post.title.rendered}</h1>
                            <section>
                                <Html2React html={post.excerpt.rendered} />
                            </section>
                        </Link>
                    </ Teaser>
                )
            })}
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

const PrevNextNav = styled.div`
  grid-column: span 1;
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

const Teaser = styled(Card)`
    height: 25em;
    img {
      transition: all 1s ease-in-out;
      width:100%; height: 100%;
      object-fit: cover;
    }
  
    a{
      text-decoration: none;
      transition: background-color 2s ease;
      background-color: rgba(255,255,255,.3);
      position:absolute;
      bottom:0;
      display: block;
      padding: 0 5px;
    }
  
      h1{
        color: var(--text);
        text-decoration: none;
      }
      
      section {
          transition: all 1s ease-in-out;
          max-height: 0;
          overflow: hidden;
      }

    &:hover{
        img{
          transform: scale(1.05);
        }
        a{
          background-color: var(--white);
        }
        
        section{
          max-height:5rem;
        }
        h1{
          text-decoration: underline;
          color: var(--heading);
        }
  }

`