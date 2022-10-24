import React, { Fragment, useState } from "react";
// import { Router, Routes } from "react-router-dom";
import Modal from "./UI/modal";
import CoverageCard from "../cards/CoverageCard";

const Coverage = () => {
  const [openList, setOpenList] = useState(false);

  const sportsClickHandler = () => {
    setOpenList(!openList);
  };

  const closeModalHandler = () => {
    setOpenList(!openList);
  };

  const modalContent = (
    <div className="modal-items">
      <h1>Sports Channels</h1>
      <ul>
        <li>Channel 1</li>
        <hr />
        <li>Channel 2</li>
        <hr />
        <li>Channel 3</li>
        <hr />
        <li>Channel 4</li>
        <hr />
        <li>Channel 5</li>
        <hr />
        <li>Channel 6</li>
        <hr />
        <li>Channel 7</li>
        <hr />
        <li>Channel 8</li>
        <hr />
        <li>Channel 9</li>
        <hr />
        <li>Channel 10</li>
        <hr />
      </ul>
    </div>
  );
  const modalController = (
    <Modal onClose={closeModalHandler}>{modalContent}</Modal>
  );

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
        <button onClick={sportsClickHandler}>Sports</button>
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
      {openList && modalController}
      <div className="cards">{/* <CoverageCard /> */}</div>
    </div>
  );
};

export default Coverage;
