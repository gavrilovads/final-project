import React, { useState } from "react";

import "./GuestManagement.css";

const GuestManagementHeader = ({ togglePopover, onSearch }) => {
  const [searchString, setSearchString] = useState("");
  const handleInputChange = (e) => {
    setSearchString(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleSearchButtonClick = () => {
    handleSearch();
  };

  const handleSearch = () => {
    onSearch(searchString);
  };

  return (
    <div className="guest-management-header">
      <div className="edit-entry">
        <div className="search-bar-section">
          <input
            type="search"
            id="search-relationship-input"
            placeholder="Filter by relationship"
            value={searchString}
            onChange={handleInputChange}
            onKeyDown={handleKeyPress}
          />
          <button
            className="search-button"
            id="search-rel-button"
            onClick={handleSearchButtonClick}
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>
      </div>
      <div className="add-new-guest">
        <button
          id="add-guest"
          className="primary-button button large-button"
          onClick={togglePopover}
        >
          Add new guest
        </button>
      </div>
    </div>
  );
};

export default GuestManagementHeader;
