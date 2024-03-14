import React from "react";
import "./send.css";
import Boton from "../boton/boton.jsx";
import Input from "../input/input.jsx";
import imagenHomePage from "../homePage/imagen.svg";

const Formulario = () => {
  return (
    <div className="form-format">
      <img src={imagenHomePage} alt="icon" />
      <form className="baseForm">
        <Input
          type="text"
          id="receiverAddress"
          name="receiverAddress"
          placeholder="Receiver Address"
          required
        />
        <Input
          type="text"
          id="amountETH"
          name="amountETH"
          placeholder="Amount (ETH)"
          required
        />
        <Input
          type="url"
          id="gifLink"
          name="gifLink"
          placeholder="Enter Gif Link"
          required
        />
        <Input
          id="message"
          name="message"
          placeholder="Enter Message"
          required
        ></Input>
        <Boton title="Send Now" size="352px" />
      </form>
    </div>
  );
};

export default Formulario;
