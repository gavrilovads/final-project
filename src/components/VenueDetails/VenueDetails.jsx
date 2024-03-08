import React from "react";
import "./VenueDetails.css";
import WeatherStats from "../WeatherStats";

const VenueDetails = () => {
  return (
    <>
      <section className="venue-section-wrapper">
        <div className="text-container">
          <div className="text-wrapper">
            <div className="venue-details-text venue-details" id="venue-place">
              Vestibulum bibendum orci ipsum, eget rhoncus massa molestie quis.
              Suspendisse mattis orci nec quam elementum, ut ultricies dui
              venenatis. Donec tristique ipsum nisl, vel aliquam diam euismod
              non. Ut auctor libero odio, sit amet consectetur elit tincidunt
              nec.
              <br /> Curabitur lobortis fringilla turpis. Aliquam erat volutpat.
              Duis sodales viverra cursus. Donec feugiat, odio accumsan
              facilisis pretium, sem massa commodo ex, ac tincidunt nunc mi ac
              tortor. Pellentesque in finibus nisl. Ut tincidunt diam eros, at
              convallis mi porta sit amet. Sed pretium urna turpis, eget mollis
              risus luctus at.
            </div>
            <div className="venue-details" id="venue-misc">
              <WeatherStats />
            </div>
          </div>
        </div>
        <div className="venue-location-wrapper">
          <div className="section-header cinzel-decorative-bold">Address</div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2704.196305244867!2d28.803636577413254!3d47.33003740703322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40cbe94149f8514d%3A0xc48c301dbe0b2e3a!2zQ29tcGxleHVsIFR1cmlzdGljIOKAnkNvZHJ14oCd!5e0!3m2!1sen!2sro!4v1709388975023!5m2!1sen!2sro"
            width="400"
            height="400"
            loading="lazy"
            className="map"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default VenueDetails;
