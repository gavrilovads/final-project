import React, { useState, useEffect } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    // Check if user is admin from local storage
    const isAdminStored = localStorage.getItem("isAdmin");
    if (isAdminStored === "true") {
      setAdmin(true);
    }
  }, []);

  const handleLogout = () => {
    // Clear isAdmin from local storage
    localStorage.removeItem("isAdmin");
    // Set isAdmin to false in state
    setAdmin(false);
  };

  return (
    <>
      <header className="main-header">
        <nav className="guest-nav nav-bar flex-row">
          <Link to="/RSVP">
            <input
              type="button"
              id="rsvp"
              className="button secondary-button"
              value="RSVP"
            />
          </Link>
          <Link to="/our_playlist">
            <input
              type="button"
              id="playlist"
              className="button secondary-button"
              value="Playlist"
            />
          </Link>
          <Link to="/media">
            <input
              type="button"
              id="media"
              className="button secondary-button"
              value="Media"
            />
          </Link>
          <Link to="/registry">
            <input
              type="button"
              id="registry"
              className="button secondary-button"
              value="Registry"
            />
          </Link>
        </nav>
        <Link to="/">
          <div className="logo-wrapper">
            <img
              id="header-logo"
              src="./src/assets/logo.svg"
              alt="Logo image"
            />
          </div>
        </Link>
        <nav className="nav-bar">
          <div className={`admin-nav nav-bar ${isAdmin ? "" : "hidden"}`}>
            <Link to="/guest_management">
              <input
                type="button"
                id="guests"
                className="button secondary-button"
                value="Guests"
              />
            </Link>
            <Link to="/to_do">
              <input
                type="button"
                id="to-do-list"
                className="button secondary-button"
                value="To do"
              />
            </Link>
            <Link to="/projection">
              <input
                type="button"
                id="projections"
                className="button secondary-button"
                value="Projections"
              />
            </Link>
          </div>

          <Link to={isAdmin ? "/" : "/login"}>
            <input
              type="button"
              id="log-in"
              className="button primary-button"
              value={isAdmin ? "Log out" : "Log in"}
              onClick={isAdmin ? handleLogout : null}
            />
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
