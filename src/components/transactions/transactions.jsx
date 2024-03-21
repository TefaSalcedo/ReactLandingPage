import React, { useState, useEffect } from 'react';
import DataTransaction from "./dataTransation";
import IndividualTS from "./individualTS.jsx";
import "./transactions.css";

const Transaction = () => {
    // Estado inicial
    const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth <= 768);

    useEffect(() => {
      // Función para actualizar el estado
      const checkScreenSize = () => {
        setIsScreenSmall(window.innerWidth <= 768);
      };
  
      // Agrega el listener
      window.addEventListener('resize', checkScreenSize);
  
      // Elimina el listener cuando el componente se desmonta
      return () => window.removeEventListener('resize', checkScreenSize);
    }, []);
  
    // Filtra los datos si la pantalla es pequeña
    const filteredData = isScreenSmall ? DataTransaction.slice(0, 2) : DataTransaction;
  
  return(
  <div className="content-transactions">
    <span className="transaction-title">Latest Transactions</span>
    <div className="Grid-gifs">
      {filteredData.map((DataETH, position) => (
        <IndividualTS
          key={position}
          ffrom={DataETH.from}
          to={DataETH.To}
          ammount={DataETH.Amount}
          message={DataETH.Message}
          date={DataETH.Date}
          search={DataETH.search}
        />
      ))}
    </div>
  </div>
  );
}

export default Transaction;
