import React from "react";
import "./PlaylistResults/PlaylistResults";

const SearchResults = ({ children }) => {
  return (
    <>
      <div className="search-results-wrapper">{children}</div>
    </>
  );
};

export default SearchResults;
