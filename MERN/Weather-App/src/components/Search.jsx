import React from "react";
import "./styles.css";

const Search = ({search, setSearch , handleSearch}) => {
  return (
    <div className="searchEngine">
      <input
        type="text"
        className="citySearch"
        placeholder="Enter city name"
        name="search"
        value={search}
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button className="searchBtn" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
