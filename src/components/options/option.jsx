import React from "react";
import boxData from "./boxData";
import "./option.css";

const Options = () => {
  return (
    <div className="gallery">
      {boxData.map((box, position) => (
        <div className="box" key={`${box}-${position}`}>
          <div className="icon-container">
            <img src={box.icon} alt="" />
          </div>
          <span className="Options-title">{box.title}</span>
          <p className="Options-description">{box.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Options;
