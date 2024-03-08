import React, { Children, useEffect } from "react";
import "./PlaylistResults.css";

const PlaylistResults = ({ children }) => {
  return (
    <>
      <div className="animation-overlay-wrapper">
        <div className="playlist-results-wrapper">{children}</div>
        <object
          type="image/svg+xml"
          data="../src/assets/music-key.svg"
          className="music-key"
        ></object>
      </div>
    </>
  );
};

export default PlaylistResults;
