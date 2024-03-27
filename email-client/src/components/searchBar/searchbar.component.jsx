import React from "react";
import "./searchbar.css";

const SearchBar = ({ placeholder, handleInput }) => (
    <input
        className="search"
        type="search"
        placeholder={placeholder}
        onClick={handleInput} // use on click for assignment
    />
);

export default SearchBar;
