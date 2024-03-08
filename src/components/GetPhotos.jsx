import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./PhotosCard/PhotosCard";

const GetPhotos = () => {
  const [photos, setPhotos] = useState([]);
  const [query, setQuery] = useState("modern wedding");
  const unsplash_key = "721pbx6NI6YabJ9BJogjdDpMIV5KEZL8GmBlBpUDZFI";

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          `https://api.unsplash.com/search/photos?page=1&query=${query}&per_page=20&client_id=${unsplash_key}`
        );
        // console.log("API response:", response.data.results);
        setPhotos(response.data.results);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, [query]);

  return (
    <div className="wedding-photos-wrapper">
      {photos.map((photo) => (
        <Card key={photo.id} dataImage={photo.urls.regular} />
      ))}
    </div>
  );
};

export default GetPhotos;
