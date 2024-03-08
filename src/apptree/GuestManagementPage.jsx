import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer.jsx";
import GuestDB from "../components/GuestDB/GuestDB.jsx";
import GuestManagementHeader from "../components/GuestManagement/GuestManagement.jsx";
import GuestPopover from "../components/GuestPopover/GuestPopover.jsx";
import GuestListData from "../classes/GuestListData.jsx";

const GuestManagement = () => {
  const [guestList, setGuestList] = useState(
    () => JSON.parse(localStorage.getItem("guestList")) || GuestListData
  );
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [filteredGuestList, setFilteredGuestList] = useState(guestList);

  const deleteRow = (guestToDelete) => {
    const updatedGuestList = guestList.filter(
      (guest) => guest.code !== guestToDelete.code
    );
    setGuestList(updatedGuestList);
    setFilteredGuestList(updatedGuestList);
  };

  const addGuest = (newGuest) => {
    setGuestList((prevGuests) => [...prevGuests, newGuest]);
    setFilteredGuestList((prevGuests) => [...prevGuests, newGuest]);
  };

  const togglePopover = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleClosePopover = () => {
    setIsPopoverOpen(false);
  };

  // Function to handle search and filter the guest list
  const handleSearch = (searchString) => {
    const filteredList = guestList.filter((guest) =>
      guest.relationship.toLowerCase().includes(searchString.toLowerCase())
    );
    setFilteredGuestList(filteredList);
  };

  useEffect(() => {
    const storedGuestList = JSON.parse(localStorage.getItem("guestList"));
    if (storedGuestList) {
      setGuestList(storedGuestList);
      setFilteredGuestList(storedGuestList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("guestList", JSON.stringify(guestList));
  }, [guestList]);

  return (
    <div className="guest-management-page single-page">
      <Header />
      <section className="guest-management-section">
        <GuestManagementHeader
          togglePopover={togglePopover}
          onSearch={handleSearch}
        />
        <GuestDB guests={filteredGuestList} onDelete={deleteRow} />
        {isPopoverOpen && (
          <GuestPopover onClose={handleClosePopover} onAddGuest={addGuest} />
        )}
      </section>
      <Footer />
    </div>
  );
};

export default GuestManagement;
