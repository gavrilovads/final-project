import React, { useState, useEffect } from "react";
import Toast from "../Toast/Toast.jsx";
import GuestListData from ".././././/..///classes/GuestListData.jsx";

import "./RSVPForm.css";
import "..//../App.css";

const RSVPForm = () => {
  const [showPlusOneName, setShowPlusOneName] = useState(false);
  const [codeMatch, setCodeMatch] = useState(null);
  const [rsvpStatus, setRsvpStatus] = useState(""); // track RSVP status
  const [guestList, setGuestList] = useState([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [toastKey, setToastKey] = useState(0);

  useEffect(() => {
    const storedGuestList = JSON.parse(localStorage.getItem("guestList"));
    if (storedGuestList) {
      setGuestList(storedGuestList);
    } else {
      setGuestList(GuestListData);
    }
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target.elements);
    console.log(event.target.elements.numberOfChildren.valueAsNumber);
    console.log(event.target.elements.numberOfChildren.value);
    const code = event.target.elements.code.value;

    const guestIndex = guestList.findIndex((guest) => guest.code === code);

    // check if any button was clicked and update RSVP status accordingly
    if (rsvpStatus && guestIndex !== -1) {
      const updatedGuestList = [...guestList];
      const firstName = event.target.elements.firstName.value;
      const lastName = event.target.elements.lastName.value;
      const email = event.target.elements.email.value;
      const plusOne = event.target.elements.plusOne.checked;
      const plusOneName = showPlusOneName
        ? event.target.elements.plusOneName.value
        : "";
      const numberOfChildren =
        event.target.elements.numberOfChildren.valueAsNumber;

      const outOfTown = event.target.elements.outOfTown.checked;

      updatedGuestList[guestIndex] = {
        ...updatedGuestList[guestIndex],
        firstName,
        lastName,
        email,
        plusOne,
        plusOneName,
        numberOfChildren,
        outOfTown,
        rsvp: rsvpStatus,
      };

      localStorage.setItem("guestList", JSON.stringify(updatedGuestList));
      setCodeMatch(true);
      setToastKey((prevKey) => prevKey + 1);
      console.log("Code matches");
    } else {
      setCodeMatch(false);
      setToastKey((prevKey) => prevKey + 1);
      console.log("Code does not match");
    }
    event.target.reset();
    setFormSubmitted(true);
  };

  const handlePlusOneChange = (event) => {
    setShowPlusOneName(event.target.checked);
  };

  const handleRsvpChange = (event) => {
    setRsvpStatus(event.target.value);
  };

  return (
    <>
      <form className="rsvp-form-wrapper" onSubmit={handleSubmit}>
        <div className="rsvp-form">
          <label htmlFor="firstName">First name:</label>
          <input
            type="text"
            className="form-input"
            id="firstName"
            required
            autoComplete="false"
          />
          <label htmlFor="lastName">Last name:</label>
          <input
            type="text"
            className="form-input"
            id="lastName"
            required
            autoComplete="false"
          />
          <label htmlFor="email">email:</label>
          <input
            type="email"
            className="form-input"
            id="email"
            required
            autoComplete="false"
          />
          <label htmlFor="code">code:</label>
          <input
            type="text"
            className="form-input"
            id="code"
            required
            autoComplete="false"
          />
          <label htmlFor="plusOne">Plus one:</label>
          <input
            type="checkbox"
            className="checkbox"
            id="plusOne"
            onChange={handlePlusOneChange}
          />

          <label htmlFor="plusOneName">Name:</label>
          <input
            type="text"
            className="form-input"
            id="plusOneName"
            disabled={!showPlusOneName}
          />

          <label htmlFor="numberOfChildren">Children:</label>
          <input
            type="number"
            className="form-input"
            id="numberOfChildren"
            name="numberOfChildren"
          />
          <label htmlFor="outOfTown">Out of town:</label>
          <input type="checkbox" className="checkbox" id="outOfTown" />
        </div>
        <div className="button-group">
          {/* Use type="submit" for all buttons and handle the RSVP status change */}
          <button
            type="submit"
            className="button secondary-button large-button"
            value="No"
            onClick={handleRsvpChange}
          >
            Sorry, cannot make it
          </button>
          <button
            type="submit"
            className="button secondary-button large-button"
            value="Maybe"
            onClick={handleRsvpChange}
          >
            Not sure yet
          </button>
          <button
            type="submit"
            className="button primary-button large-button"
            value="Yes"
            onClick={handleRsvpChange}
          >
            Count me in
          </button>
        </div>
      </form>
      {formSubmitted && (
        <Toast
          key={toastKey}
          className={codeMatch ? "success-toast" : "error-toast"}
          header={
            codeMatch
              ? "Thank you for reaching out!"
              : "Looks like you were not invited."
          }
          content={
            codeMatch
              ? "Hopefully, see you soon."
              : "JK, please try to put the code correctly."
          }
          duration={5000}
        />
      )}
    </>
  );
};

export default RSVPForm;
