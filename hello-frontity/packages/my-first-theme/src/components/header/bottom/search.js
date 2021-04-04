import {connect, styled} from "frontity";
import React, { useRef } from "react";
import Icon from "../../icons/icon";

const Search = ({ state, libraries, actions }) => {
    // Search modal status and actions
    const { isSearchModalOpen } = state.theme;
    const { closeModals } = actions.theme;

    //Get search query
    const parse = libraries.source.parse(state.router.link);
    const searchQuery = parse.query["s"];

    // Keep a reference to the input so we can grab it's value on form submission
    const inputRef = useRef();

    // Format the query to remove trailing spaces and replace space with "+"
    const formatQuery = query =>
        query
            .trim()
            .replace(" ", "+")
            .toLowerCase();

    //Handle the submission of search
    const handleSubmit = event => {
        // Prevent page navigation
        event.preventDefault();

        // Get the input's value
        const searchString = inputRef.current.value;

        // If the typed search string is not empty
        // Better to trim write spaces as well
        if (searchString.trim().length > 0) {
            // Let's go search for blogs that match the search string
            actions.router.set(`/?s=${formatQuery(searchString)}`);

            // Scroll the page to the top
            window.scrollTo(0, 0);

            // Close the search modal
            closeModals();
        }
    };

    return (
        <Div
            data-open={isSearchModalOpen}
        >
            <SearchForm
                onSubmit={handleSubmit}
            >
                <SearchInput
                    size="1"
                    type="search"
                    defaultValue={searchQuery || ""}
                    placeholder="Search..."
                    name="search"
                    ref={inputRef}
                />
                <SearchSubmit><Icon icon="search" /></SearchSubmit>
            </SearchForm>
        </Div >
    )
}


export default connect(Search)


const SearchInput = styled.input`
    flex: 1 1 auto;
    font-size:2em;
    padding:.2em;
    background: var(--white);
    border: none;
    color: var(--text);
    &::placeholder{
        color: var(--heading);
    }
    &:hover,
    &:focus{
        box-shadow: inset 0 1px 1px var(--heading);
    }
`
const SearchSubmit = styled.button`
    font-size:2em;
    padding:.2em;
    background: var(--light);
    color: var(--heading);
    pointer: cursor;
    border: none;
    &:hover{
        cursor: pointer;
    }
    &:hover,
    &:focus{
        color: var(--white);
    }
    
`

const Div = styled.div`
  position:fixed;
  z-index: 80;
  left: 0; bottom: 0rem;
  transition: transform .5s ease-in-out;
  transform: translateY(5rem);
  height: 5rem;
  width: 100%;
  background: var(--light);
  [data-hidden="false"] ~ &{
    transform: translateY(0rem);
  }
  [data-hidden="false"][data-searchopen="true"] ~  &{
    transform: translateY(-5rem);
  }
`

const SearchForm = styled.form`
    max-width: 800px;
    margin:auto;
    padding: 0.5em 1em;
    display:flex;
    flex:1 1 auto;
`