import React from "react"
import { connect , styled } from "frontity"
const SearchResults = ({ state, libraries }) => {
    const currentPath = state.router.link;

    const data = state.source.get(currentPath);

    // Get the total pages that match the current path/url
    const { total } = data;
    const isEmpty = total === 0;

    // Parse to current url to get the search query
    const parse = libraries.source.parse(currentPath);
    // Parse returns an object whose query string is stored in "s"
    const searchQuery = parse.query["s"];
    // Since we formatted the query string in the search modal, let's reverse the formatting
    const reverseFormat = query => query.replace("+", " ");

    return (
        <>
            <h4>Search Results</h4>
            <h5>{`“${reverseFormat(searchQuery)}”`}</h5>
            {isEmpty ? (
                <Text>
                    We could not find any results for your search. You can give it
                    another try through the search form below.
                </Text>
            ) : (
                <Text>
                    We found {total} {total === 1 ? "result" : "results"} for your
                    search.
                </Text>
            )}
        </>
    )
}


export default connect(SearchResults);

const Text = styled.p``