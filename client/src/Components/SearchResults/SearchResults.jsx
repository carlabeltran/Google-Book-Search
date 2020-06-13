import React from "react";
import "../../Styles/SearchResults.css";

function SearchResults(props) {
    return (
        <ul className="list-group search-results">
            {props.results.map(result => (
                <li key={result} className="list-group-item">
                    <img alt="Dog" src={result} className="img-fluid" />
                </li>
            ))}
        </ul>
    );
}

export default SearchResults;