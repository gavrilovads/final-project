import React, { useState } from "react";
import "./GuestDB.css";

// Define GuestRow component
const GuestRow = ({ guest, onDelete }) => {
  const {
    email,
    firstName,
    lastName,
    plusOneName,
    numberOfChildren,
    isOutOfTown,
    relationship,
    videoUploaded,
    rsvp,
    code,
  } = guest;
  const handleDelete = () => {
    onDelete(guest);
  };

  return (
    <div className="table-row">
      <div className="table-column text-column">{firstName}</div>
      <div className="table-column text-column">{lastName}</div>
      <div className="table-column text-column">{email}</div>
      <div className="table-column text-column">{code}</div>
      <div className="table-column text-column">{plusOneName}</div>
      <div className="table-column text-column">{numberOfChildren}</div>
      <div className="table-column check-column">
        {isOutOfTown ? "Yes" : "No"}
      </div>
      <div className="table-column text-column">{relationship}</div>
      <div className="table-column text-column">
        {videoUploaded ? "Yes" : "No"}
      </div>
      <div className="table-column text-column">{rsvp}</div>
      <div className="table-column text-column">
        <button className="clear-button card-button" onClick={handleDelete}>
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

const GuestDB = ({ guests, onDelete }) => {
  const [guestList, setGuestList] = useState(guests);

  return (
    <div className="guest-management-table">
      <div className="table-header table-row">
        <div className="table-column text-column">First name</div>
        <div className="table-column text-column">Last name</div>
        <div className="table-column text-column">Email</div>
        <div className="table-column text-column">Code</div>
        <div className="table-column text-column">Plus one name</div>
        <div className="table-column text-columnn">Number of children</div>
        <div className="table-column check-column">Out of town</div>
        <div className="table-column text-column">Relationship</div>
        <div className="table-column text-column">Video</div>
        <div className="table-column text-column">RSVP Status</div>
        <div className="table-column text-column"></div>
      </div>
      {guests.map((guest, index) => (
        <GuestRow
          key={index}
          guest={guest}
          onDelete={onDelete}
          setGuestList={setGuestList}
        />
      ))}
    </div>
  );
};

export default GuestDB;
