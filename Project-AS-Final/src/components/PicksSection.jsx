import React from "react";
import "../styles/PicksSection.css";

const PicksSection = () => {
  return (
    <section className="picks-section">
      <p className="subtitle">Give Sport</p>
      <h1 className="title">RAI BENJAMIN'S PICKS</h1>
      <p className="description">
        Gift the styles that fuel the champion sprinter & hurdler’s confidence
        beyond the finish line.
      </p>
      <div className="buttons">
        <a href="#" className="button">
          Shop Rai's Picks
        </a>
        <a href="#" className="button">
          Shop Gifts
        </a>
      </div>
    </section>
  );
};

export default PicksSection;