import React from "react";
import Countdown from "../Countdown/Countdown";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-text-wrapper">
          <div className="simple-paragraph">we are getting married</div>
          <div className="hero-text cinzel-decorative-bold">Daniel & Alina</div>
          <div className="counter-wrapper">
            <Countdown
              timeTillDate="08 22 2024, 10:00 am"
              timeFormat="MM DD YYYY, h:mm a"
            />
          </div>
        </div>
        <div className="hero-video-wrapper">
          <div className="videos">
            <video
              id="video-one"
              disablePictureInPicture
              className="video-container"
              width="350"
              muted
              src="/src/assets/Video/rooftop.mp4"
              autoPlay
              loop={true}
              type="video/mp4"
            ></video>
            <video
              id="video-two"
              className="video-container"
              disablePictureInPicture
              height="125"
              muted
              src="/src/assets/Video/rooftop-2.mp4"
              autoPlay
              loop={true}
              type="video/mp4"
            ></video>
            <video
              id="video-three"
              className="video-container"
              disablePictureInPicture
              width="200"
              muted
              src="/src/assets/Video/rooftop-4.mp4"
              autoPlay
              loop={true}
              type="video/mp4"
            ></video>
            <video
              id="video-four"
              className="video-container"
              disablePictureInPicture
              width="450"
              muted
              src="/src/assets/Video/rooftop-3.mp4"
              autoPlay
              loop={true}
              type="video/mp4"
            ></video>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
