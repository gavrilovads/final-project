import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer";
import SearchSong from "../components/SearchSong/SearchSong";
import SongCard from "../components/SongCard/SongCard";
import PlaylistResults from "../components/PlaylistResults/PlaylistResults";
import getToken from "../assets/getToken";

const accessToken = await getToken();

const PlaylistPage = () => {
  const [playlistData, setPlaylistData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching data from the Spotify API for the playlist
        const response = await fetch(
          "https://api.spotify.com/v1/playlists/6TwFVTzaX75mjkCT5SGSYu/tracks?market=RO",
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
        setPlaylistData(data);
        // console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // console.log(playlistData);
  return (
    <div className="playlist-page">
      <Header />
      <SearchSong />
      <PlaylistResults>
        {playlistData &&
          playlistData.items.map((item, index) => (
            <SongCard
              key={index}
              trackName={item.track.name}
              artistName={item.track.artists[0].name}
              albumImageURL={item.track.album.images[1].url}
              visible={false}
              trackUrl={item.track.external_urls.spotify}
            />
          ))}
      </PlaylistResults>
      <Footer />
    </div>
  );
};

export default PlaylistPage;
