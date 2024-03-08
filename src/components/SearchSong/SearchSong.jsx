import React, { useState } from "react";
import SongCard from "../SongCard/SongCard";
import SearchResults from "../SearchResults";
import "./SearchSong.css";
import getToken from "../../assets/getToken";
const accessToken = await getToken();

const SearchSong = () => {
  const [searchData, setSearchData] = useState(null);
  const [searchString, setSearchString] = useState("");

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/search?q=${searchString}&type=track&market=RO&limit=10`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setSearchData(data);
      // console.log(data);
    } catch (error) {
      console.error("Error fetching search data:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && searchString.trim() !== "") {
      fetchData();
    }
  };

  const handleSearchButtonClick = () => {
    if (searchString.trim() !== "") {
      fetchData();
    }
  };

  const handleClearButtonClick = () => {
    setSearchData(null);
    setSearchString("");
  };

  const handleInputChange = (event) => {
    setSearchString(event.target.value);
  };

  return (
    <>
      <section className="header-and-search-wrapper">
        <div className="secondary-page-header">
          Join us in creating the wedding playlist
        </div>
        <div className="search-wrapper">
          <div className="search-bar-section">
            <input
              type="search"
              id="search-song-input"
              placeholder="Search a song"
              value={searchString}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
            <button
              className="search-button"
              id="search-song-button"
              onClick={handleSearchButtonClick}
            >
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
          {searchData && (
            <button
              className="clear-button card-button"
              onClick={handleClearButtonClick}
            >
              <i className="fa-solid fa-trash"></i>
            </button>
          )}
        </div>
      </section>
      <section className="results-section">
        <SearchResults>
          {searchData &&
            searchData.tracks.items.map((item, index) => (
              <SongCard
                key={index}
                trackName={item.name}
                artistName={item.artists[0].name}
                albumImageURL={item.album.images[1].url}
                trackId={item.uri}
                visible={true}
                trackUrl={item.external_urls.spotify}
              />
            ))}
        </SearchResults>
      </section>
    </>
  );
};

export default SearchSong;
