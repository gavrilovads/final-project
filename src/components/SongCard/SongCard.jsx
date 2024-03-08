import React, { useState, useEffect } from "react";
import "./SongCard.css";

const client_id = "6a5287f4b5bc422aa05457e3ba1eac24";
const redirect_uri = "http://localhost:5173/our_playlist";
const scope =
  "user-read-private user-read-email playlist-modify-private playlist-modify-public";
const state = generateRandomString(16);

function generateRandomString(length) {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

const SongCard = ({
  trackName,
  artistName,
  albumImageURL,
  visible,
  trackId,
  trackUrl,
}) => {
  const playlistId = "6TwFVTzaX75mjkCT5SGSYu";
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getAccessToken = async () => {
      try {
        const urlParams = new URLSearchParams(
          window.location.hash.substring(1)
        );
        const accessToken = urlParams.get("access_token");
        const stateParam = urlParams.get("state");

        if (accessToken && stateParam === state) {
          await addSongToPlaylist(accessToken);
        }
      } catch (error) {
        console.error("Error retrieving access token:", error);
        setErrorMessage("Failed to retrieve access token");
      }
    };

    getAccessToken();
  }, []);

  const addSongToPlaylist = async (accessToken) => {
    try {
      const response = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ uris: [trackId] }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add track to playlist");
      }

      // Track successfully added to the playlist
      console.log("Track added to playlist successfully");
    } catch (error) {
      console.error("Error adding track to playlist:", error);
      setErrorMessage("Failed to add track to playlist");
    }
  };

  const truncateString = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };

  const goToSpotify = () => {
    window.open(trackUrl, "_blank");
  };

  const addToPlaylist = () => {
    const authorizationUrl =
      "https://accounts.spotify.com/authorize" +
      "?response_type=token" +
      "&client_id=" +
      encodeURIComponent(client_id) +
      "&scope=" +
      encodeURIComponent(scope) +
      "&redirect_uri=" +
      encodeURIComponent(redirect_uri) +
      "&state=" +
      encodeURIComponent(state);

    window.location.href = authorizationUrl;
  };

  return (
    <>
      <div className="card-wrapper" onClick={goToSpotify}>
        <div className="card-image-wrapper">
          <img src={albumImageURL} alt={trackName} />
        </div>
        <div className="card-footer">
          <div className="card-details">
            <div className="song-title">{truncateString(trackName, 20)}</div>
            <div className="artist-name">{truncateString(artistName, 20)}</div>
          </div>
          {visible && (
            <button
              className="card-button"
              id="add-to-playlist"
              onClick={addToPlaylist}
            >
              <i className="fa-solid fa-plus"></i>
            </button>
          )}
        </div>
      </div>
      {/* {errorMessage && <p className="error-message">{errorMessage}</p>} */}
    </>
  );
};

export default SongCard;
