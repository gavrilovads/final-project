import React from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer.jsx";

const NoPage = () => {
  return (
    <div className="no-page">
      <Header />
      <div>
        <img src="./assets/404.svg" alt="page not found" />
      </div>
      <Footer />
    </div>
  );
};

export default NoPage;
