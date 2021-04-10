import React from "react"
import {connect, styled, Global, Head, css} from "frontity"
import Lorems from "./lorems"
import Header from "./header/header";
import Container from "./helpers/container"


const Root = ({ state }) => {
    const colors = state.theme.css.colors
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

            <Header />
            <Container>
                <Lorems n={20} />
            </Container>
        </>
    )
}

export default connect(Root)