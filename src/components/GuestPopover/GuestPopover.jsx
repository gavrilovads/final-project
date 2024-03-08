import React, { useState } from "react";
import "./GuestPopover.css";

const GuestPopover = ({ onClose, onAddGuest }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [relationship, setRelationship] = useState("");
  const [email, setEmail] = useState("");
  const [code] = useState(crypto.randomUUID());

  const handleCancel = () => {
    onClose();
  };

  const handleAddGuest = (e) => {
    e.preventDefault();

    const newGuest = {
      firstName,
      lastName,
      email,
      code,
      relationship,
    };
    onAddGuest(newGuest);
    onClose();
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRelationshipChange = (e) => {
    setRelationship(e.target.value);
  };

  return (
    <>
      <div className="overlay"></div>
      <div className="guest-popover">
        <form className="new-guest-form" onSubmit={handleAddGuest}>
          <div className="new-guest-form-wrapper">
            <label htmlFor="firstName-add">First name:</label>
            <input
              type="text"
              className="form-input"
              id="firstName-add"
              value={firstName}
              onChange={handleFirstNameChange}
            />
            <label htmlFor="lastName-add">Last name:</label>
            <input
              type="text"
              className="form-input"
              id="lastName-add"
              value={lastName}
              onChange={handleLastNameChange}
            />
            <label htmlFor="email-add">Email:</label>
            <input
              type="email"
              className="form-input"
              id="email-add"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <label htmlFor="rel-add">Relationship:</label>
            <input
              type="text"
              className="form-input"
              id="rel-add"
              value={relationship}
              onChange={handleRelationshipChange}
            />
          </div>
          <div className="button-group">
            <button
              type="button"
              className="button secondary-button"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="button primary-button large-button"
            >
              Add guest
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GuestPopover;
