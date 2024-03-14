import React from "react";
import "./boton.css";

const Boton = ({title, size}) => {
  return (
    <button className="amarillo" style={{width:size}}>{title}</button>
  );
};
export default Boton;
