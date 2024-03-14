import React from "react";
import "./input.css";

const Input = ({placeholder,type}) => {
  return (
    <input className="input-form" placeholder={placeholder} type={type}></input>
  );
};
export default Input;
