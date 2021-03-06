import React from "react"
import { connect, Global, css, styled, Head} from "frontity"
import Header from "./header/header"
import Footer from "./footer/footer";
import Switch from "@frontity/components/switch"

import List from "./list"
import Post from "./post"
import Loading from "./loading"
import Error from "./error"

import mq from "./mq"

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)
    const {colors} = state.theme.css;

    return (
        <>
            <Head>
                <title>My First Frontity Theme</title>
                <meta
                    name="description"
                    content="Based on the Frontity step by step tutorial"
                    />
            </Head>
            <Global
                styles={css`
                    * {
                        margin: 0;
                        padding: 0;
                        box-sizing: border-box;
                    }
                    html {
                        font-family: "Roboto Condensed", sans-serif;
                        font-size: 16px;

                        color: var(--text);
                    }
                    :root{
                        --white: ${colors.white};
                        --red: ${colors.red};
                        --blue: ${colors.blue};
                        --heading: ${colors.heading};
                        --text: ${colors.text};
                        --light: ${colors.light};
                        --accent: ${colors.accent};
                        
                        line-height:1.5;
                    }
                    a {
                        color: inherit;
                    }
                    html,
                    body,
                     #root{
                        height: 100%;
                    },
                    #root {
                      display: flex;
                      flex-direction: column;
                    }
                `}
            />
            <Header />
            <Main>
                <Switch>
                    <Loading when={data.isFetching} />
                    <List when={data.isSearch} />
                    <List when={data.isArchive} />
                    <Post when={data.isPost} />
                    <Post when={data.isPage} />
                    <Error when={data.isError} />
                </Switch>
            </Main>
            <Footer />
        </>
    )
}

export default connect(Root)

const Main = styled.main`
  flex: 1 0 auto;
max-width: 800px;
padding: 10em 1em 1em;
transition: padding-top .2s ease-in-out;
margin: auto;
  display: grid;
  grid-template-columns: repeat( auto-fit, minmax(250px, 1fr) );
  grid-gap: 1em;

${mq[0]} {
    padding-top:6em;
}

img {
    max-width: 100%;
}
`