import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./apptree/LandingPage.jsx";
import PlaylistPage from "./apptree/PlaylistPage.jsx";
import RSVP from "./apptree/RSVPPage.jsx";
import NoPage from "./apptree/EndOfInternet.jsx";
import GuestManagement from "./apptree/GuestManagementPage.jsx";
import "./App.css";
import LoginPage from "./apptree/LogInPage.jsx";
import RegistryPage from "./apptree/RegistryPage.jsx";
import ProjectionPage from "./apptree/ProjectionPage.jsx";
import ToDoPage from "./apptree/ToDoPage.jsx";
import MediaPage from "./apptree/MediaPage.jsx";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route path="/our_playlist" element={<PlaylistPage />} />
          <Route path="/rsvp" element={<RSVP />} />
          <Route path="/registry" element={<RegistryPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/projection" element={<ProjectionPage />} />
          <Route path="/to_do" element={<ToDoPage />} />
          <Route path="/guest_management" element={<GuestManagement />} />
          <Route path="/media" element={<MediaPage />} />

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
