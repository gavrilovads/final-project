import React, { useState, useEffect, useRef } from "react";
import "./PhotosCard.css";

const Card = ({ dataImage }) => {
  const cardRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      if (cardRef.current) {
        const { offsetWidth, offsetHeight } = cardRef.current;
        setDimensions({ width: offsetWidth, height: offsetHeight });
      }
    };

    updateDimensions();

    const handleResize = () => {
      updateDimensions();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseMove = (e) => {
    const { pageX, pageY } = e;
    const { offsetLeft, offsetTop } = cardRef.current;
    const x = pageX - offsetLeft - dimensions.width / 2;
    const y = pageY - offsetTop - dimensions.height / 2;
    setMousePosition({ x, y });
    setShowDownloadButton(true);
  };

  const handleMouseEnter = () => {
    setShowDownloadButton(true);
  };

  const handleMouseLeave = () => {
    setShowDownloadButton(false);
  };

  const handleDownloadClick = () => {
    // Add logic to handle download action
    const link = document.createElement("a");
    link.href = dataImage;
    link.target = "_blank";
    link.download = "image.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const { width, height } = dimensions;
  const { x, y } = mousePosition;

  const cardStyle = {
    transform: `rotateY(${(x / width) * 30}deg) rotateX(${
      (y / height) * -30
    }deg)`,
  };

  const cardBgTransform = {
    transform: `translateX(${(x / width) * -40}px) translateY(${
      (y / height) * -40
    }px)`,
  };

  const cardBgImage = {
    backgroundImage: `url(${dataImage})`,
  };

  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="card" style={cardStyle}>
        <div
          className="card-bg"
          style={{ ...cardBgTransform, ...cardBgImage }}
        ></div>
        {showDownloadButton && (
          <button
            className="download-button card-button"
            onClick={handleDownloadClick}
          >
            <i className="fa-solid fa-circle-down"></i>
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
