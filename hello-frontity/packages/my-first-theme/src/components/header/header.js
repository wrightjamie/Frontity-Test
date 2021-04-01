import React from "react"
import { connect, styled } from "frontity"
import Search from "./search"
import RAFroundel from "./rafroundel";
import TitlesSection from "./titlessection";
import Navigation from "./navigation";
import Bottom from "./bottom/bottom";

import mq from "../mq"
import overlay from "./overlay";


const Header = ({ state , actions}) => {
    const data = state.source.get(state.router.link);
    const { modals , isSearchModalOpen } = state.theme;
    const { closeModals } = actions.theme


    return (
        <header data-modals={Object.keys(modals).reduce((acc,val) =>acc + (modals[val]? `${val} ` : '') ,'').trim()}>
            <Overlay
                onClick={closeModals}
            />
            <HeaderBox
                isPostType={data.isPostType}
                isPage={data.isPage}
            >
                <Search />
                <RAFroundel />
                <HeaderContent>
                    <TitlesSection />
                    <Navigation />
                </HeaderContent>
            </HeaderBox>
            <Bottom />
        </header>
    )
}

export default connect(Header)

const HeaderBox = styled.div`
    z-index: 100;
    width:100%;
    position:fixed;
    background-color: var(--blue);
    border-width: 0 0 8px 0;
    border-style: solid;
    border-color: ${(props) => (props.isPostType ? ( props.isPage ? "var(--accent)" : "var(--red)") : "var(--heading)")};
    ${mq[0]} {
        height:5em;
        transition: height .5s ease-in-out;
        overflow-y: hidden;
        [data-modals~="menu"] & {
            height: 80vh;
        }
    }
    
    `
const HeaderContent = styled.div`
    max-width: 800px;
    padding: .5em 1em;
    margin: auto;
    display:flex;
    flex-direction:column;
    ${mq[0]} {
        flex-direction: row;
    }
`

const Overlay = styled.div`${overlay}`