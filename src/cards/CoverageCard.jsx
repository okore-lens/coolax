import React, { Fragment, useState } from "react";
import Modal from "../components/UI/modal";

const CoverageCard = (props) => {
  const [openList, setOpenList] = useState(false);

  const sportsClickHandler = () => {
    setOpenList(!openList);
  };

  const closeModalHandler = () => {
    setOpenList(!openList);
  };

  const modalContent = (
    <div className="modal-items">
      <h1>{props.coverage}</h1>
      <ul>
        {props.channelList.map((list) => (
          <li key={list.id}>
            {list.name} <hr />
          </li>
        ))}
      </ul>
    </div>
  );
  const modalController = (
    <Modal onClose={closeModalHandler}>{modalContent}</Modal>
  );

  return (
    <div className="coverage-card" onClick={sportsClickHandler}>
      <div className="wrapper">
        <h1>{props.coverage}</h1>
        <p>{props.message}</p>
      </div>
      {openList && modalController}
    </div>
  );
};

export default CoverageCard;
