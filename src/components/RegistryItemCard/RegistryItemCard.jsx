import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "./RegistryItemCard.css";

const RegistryItemCard = ({
  registryItemPicture,
  itemName,
  itemDescription,
  isReserved,
  onToggleReserved,
}) => {
  const truncateString = (str, maxLength) => {
    return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
  };

  return (
    <div
      className={`registry-item-wrapper ${isReserved ? "reserved-card" : ""}`}
    >
      <div className="card-image-wrapper">
        <LazyLoadImage
          src={registryItemPicture}
          alt="Some picture"
          className="card-picture"
        />
      </div>
      <div className="card-footer">
        <div className="card-details">
          <div className="item-name">{truncateString(itemName, 36)}</div>
          <div className="item-description">
            {truncateString(itemDescription, 36)}
          </div>
        </div>
        <button
          className={`clean-button ${isReserved ? "reserved" : ""}`}
          id="add-to-playlist"
          disabled={isReserved}
          onClick={() => onToggleReserved()}
        >
          <i className="fa-solid fa-heart reserve-icon"></i>
        </button>
      </div>
    </div>
  );
};

export default RegistryItemCard;
