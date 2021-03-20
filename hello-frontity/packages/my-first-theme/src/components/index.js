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
                        font-family: system-ui, Verdana, Arial, sans-serif;
                    }
                    :root{
                        --white: ${colors.white};
                        --red: ${colors.red};
                        --blue: ${colors.blue};
                        --heading: ${colors.heading};
                        --text: ${colors.text};
                        --light: ${colors.light};
                        --accent: ${colors.accent};
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
                    <Post when={data.isDestinations} />
                    <Author when={data.isAuthor} />
                    <Error when={data.isError} />
                </Switch>
            </Main>
            <Footer />
        </>
    )
}

export default connect(Root)

const Main = styled.main`
max-width: 800px;
padding: 10em 1em 1em;
transition: padding-top .2s ease-in-out;
margin: auto;

${mq[0]} {
    padding-top:6em;
}

img {
    max-width: 100%;
}
h2 {
    margin: 0.5em 0;
}
p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
}
figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
}
`