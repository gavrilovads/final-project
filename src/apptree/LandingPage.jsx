import React from "react";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import VenueDetails from "../components/VenueDetails/VenueDetails.jsx";
import Footer from "../components/Footer.jsx";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Header />
      <Hero />
      <VenueDetails />
      <Footer />
    </div>
  );
};

export default LandingPage;
