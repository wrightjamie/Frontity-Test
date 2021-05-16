import React from "react"
import {connect, styled, Global, Head, css} from "frontity"
import Lorems from "./lorems"
import Header from "./header/header";
import Container from "./helpers/container"
import List from "./list";
import Switch from "@frontity/components/switch"
import Post from "my-first-theme/src/components/post";

const Root = ({ state }) => {
    const data = state.source.get(state.router.link)
    const {colors} = state.theme.css;

    return (
        <>
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
                        --dark: ${colors.dark};
                        --white: ${colors.white};
                        --red: ${colors.red};
                        --blue: ${colors.blue};
                        --heading: ${colors.heading};
                        --text: ${colors.text};
                        --light: ${colors.light};
                        --accent: ${colors.accent};
                        
                        --roundelSize: 4rem; //Magic Number for a nice size
                        --logoWidth: 20rem; //Magic Number for the width
                        
                        line-height:1.5;
                    }
                    a {
                        color: inherit;
                        text-decoration: none;
                    }
                    #root {
                      display: flex;
                      flex-direction: column;
                    }
                `}
            />
            <Header />
            <Container>
                <Switch>
                    <List when={data.isArchive} />
                </Switch>

                <Lorems n={20}/>
            </Container>
        </>
    )
}

export default connect(Root)