import React from "react";
import { Router, Routes } from "react-router-dom";
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
      <div className="buttons">
        <Routes></Routes>
        <button>Sports</button>
        <button>Kenyan</button>
        <button>Music</button>
        <button>Documentary</button>
        <button>PPV Events</button>
        <button>African</button>
        <button>Kids</button>
        <button>Religious</button>
        <button>Indian</button>
        <button>Entertainment</button>
        <button>International News</button>
      </div>
      <div className="cards">{/* <CoverageCard /> */}</div>
    </div>
  );
};

export default Coverage;
