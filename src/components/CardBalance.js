import { convertToCurrency } from "../helpers";
import "bootstrap/dist/css/bootstrap.css";
import "../index.scss";

const CardBalance = () => {
  const MAX_LIMIT_CARD = 1500;
  const balance = 17.3;

  return (
    <div className="block">
      <h1 className="block-title">Card Balance</h1>
      <h2 className="card-balance">{`${convertToCurrency(balance)}`}</h2>
      <p className="description">{`${convertToCurrency(MAX_LIMIT_CARD - balance)} Available`}</p>
    </div>
  );
};

export default CardBalance;
