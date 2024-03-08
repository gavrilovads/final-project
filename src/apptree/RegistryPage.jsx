import React, { useState } from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer.jsx";
import RegistryData from "../classes/RegistryData.jsx";
import RegistryItemCard from "../components/RegistryItemCard/RegistryItemCard.jsx";

const RegistryPage = () => {
  const [registryItems, setRegistryItems] = useState(RegistryData);

  const toggleReserved = (index) => {
    const updatedRegistryItems = [...registryItems];
    updatedRegistryItems[index].isReserved =
      !updatedRegistryItems[index].isReserved;
    setRegistryItems(updatedRegistryItems);
  };

  return (
    <div className="registry-page single-page">
      <Header />
      <div className="section-header cinzel-decorative-bold">Our wish list</div>
      <div className="registry-items-container">
        {RegistryData.map((item, index) => (
          <RegistryItemCard
            key={index}
            itemName={item.name}
            itemDescription={item.description}
            registryItemPicture={item.image}
            isReserved={item.isReserved}
            onToggleReserved={() => toggleReserved(index)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default RegistryPage;
