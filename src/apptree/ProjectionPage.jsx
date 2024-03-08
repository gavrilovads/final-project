import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer.jsx";
import ProjectionChart from "../components/ProjectionsChart/ProjectionsChart.jsx";
import RSVPStatusChange from "../components/RSVPStatusChart.jsx";
import GuestListData from "../classes/GuestListData.jsx";

const ProjectionPage = () => {
  const [guestList, setGuestList] = useState(() => {
    const storedGuestList = localStorage.getItem("guestList");
    return storedGuestList ? JSON.parse(storedGuestList) : GuestListData;
  });

  useEffect(() => {
    localStorage.setItem("guestList", JSON.stringify(guestList));
  }, [guestList]);
  return (
    <div className="projection-page single-page">
      <Header />
      <section className="projection-content-wrapper">
        <ProjectionChart guestList={guestList} />
        <RSVPStatusChange guestList={guestList} />
      </section>
      <Footer />
    </div>
  );
};

export default ProjectionPage;
