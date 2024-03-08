import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer.jsx";
import RSVPForm from "../components/RSVPForm/RSVPForm.jsx";

const RSVP = () => {
  return (
    <div className="rsvp-page">
      <Header />
      <section className="rsvp-content-wrapper">
        <div className="rsvp-header section-header cinzel-decorative-bold">
          RSVP
        </div>
        <RSVPForm />
        <img
          src="./src/assets/greenery.svg"
          alt="greenery"
          className="greenery"
        />
      </section>
      <Footer />
    </div>
  );
};

export default RSVP;
