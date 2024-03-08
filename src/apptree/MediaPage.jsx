import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer.jsx";
import GetPhotos from "../components/GetPhotos.jsx";
const MediaPage = () => {
  return (
    <div className="media-page single-page">
      <Header />
      <section className="media-content-wrapper">
        <div className="media-section-header">
          <div className=" section-header cinzel-decorative-bold">
            Spot yourself for you were a star
          </div>

          <div className="upload-photos">
            If you have any photos form the ceremony you would like to share,
            please upload them{" "}
            <span className="button span-button">
              <a
                a
                target="_blank"
                href="https://photos.app.goo.gl/5tBBCBuDk6ck9bTh8"
              >
                here
              </a>
            </span>
          </div>
        </div>
        <GetPhotos />
      </section>
      <Footer />
    </div>
  );
};

export default MediaPage;
