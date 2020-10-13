import React from "react";
import first from "../../images/summerWomen.jpg";
import second from "../../images/unnamed.jpg";
import third from "../../images/unnamed2.jpg";
import fourth from "../../images/redwhite.jpg";
import fifth from "../../images/unamed3.jpg";
import "./imagesGrids.css";

const images = () => {
  return (
    <div className="gridImages">
      <img className="first" alt="grid" src={first} />
      <img className="second" alt="grid" src={second} />
      <img className="third" alt="grid" src={third} />
      <img className="fourth" alt="grid" src={fourth} />
      <img className="fourth" alt="grid" src={fifth} />
    </div>
  );
};

export default images;
