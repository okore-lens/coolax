import React from "react";
import CoverageCard from "../cards/CoverageCard";

const Coverage = () => {
  return (
    <div className="coverage">
      <h1>Our Coverage</h1>
      <p>
        All Your Favourite Shows, Movies, Series and Live TV at the Comfort of
        <br />
        Your House and Ready on the Go.
        <br /> Join Our Community Today
      </p>
      <div className="cards">
        <CoverageCard />
        <CoverageCard />
        <CoverageCard />
        <CoverageCard />
        <CoverageCard />
        <CoverageCard />
        <CoverageCard />
        <CoverageCard />
        <CoverageCard />
        <CoverageCard />
        <CoverageCard />
      </div>
    </div>
  );
};

export default Coverage;
