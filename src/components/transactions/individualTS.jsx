import React, { useState, useEffect } from "react";
import ObtenerGifs from "./ObtenerGifts.jsx";

const IndividualTS = ({ ffrom, to, ammount, message, date, search }) => {
  const [Gif, setGif] = useState([]);
  useEffect(() => {
    ObtenerGifs(search).then((gif) => setGif(gif));
    console.log(Gif);
  }, []);
  return (
    <div className="Transactions-container">
      <div className="Image-container">
        <img src={Gif[0]?.url || ""} />
      </div>
      <span className="Date-container">{date}</span>
      <div className="Text-container">
        <div className="Receive-cont">
             <span className="Aa"> From:  </span>
             <span className="Bb"><strong>{ffrom}</strong></span>
        </div>
        <div className="receive-cont">
             <span className="Aa"> To:  </span>
             <span className="Bb"><strong>{to}</strong></span>
        </div>
        <div className="receive-cont">
             <span className="Aa"> Amount:  </span>
             <span className="Bb"><strong>{ammount}</strong></span>
        </div>
        <div className="receive-cont">
             <span className="Aa"> Message:  </span>
             <span className="Bb"><strong>{message}</strong></span>
        </div>
      </div>
    </div>
  );
};

export default IndividualTS;
