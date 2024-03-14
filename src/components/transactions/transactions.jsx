import DataTransaction from "./dataTransation";
import IndividualTS from "./individualTS.jsx";
import "./transactions.css";

const Transaction = () => (
  <div className="content-transactions">
    <span className="transaction-title">Latest Transactions</span>
    <div className="Grid-gifs">
      {DataTransaction.map((DataETH, position) => (
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

export default Transaction;
