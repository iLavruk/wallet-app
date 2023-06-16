import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import format from "date-fns/format";

import { LATEST_TRANSACTIONS } from "../enums";
import { convertToCurrency } from "../helpers";

const TransactionDetail = () => {
  const { paymentId } = useParams();
  const { name, sum, date, description, status } = LATEST_TRANSACTIONS.find(
    ({ _id }) => _id === paymentId
  );
  return (
    <>
      <Link to="/">
        <FontAwesomeIcon icon={faChevronLeft} />
      </Link>
      <div className="block-transaction-detail">
        <h2 className="card-balance text-center">{convertToCurrency(sum)}</h2>
        <h3 className="description text-center">{name}</h3>
        <p className="description text-center">{format(date, "MM/dd/yyyy, hh:mm")}</p>
        <div className="block mt-4">
          <h4 className="subtitle">Status: {status}</h4>
          <p className="description pb-2">{description}</p>
          <div className="block-total mt-2">
            <h4 className="subtitle">Total: </h4>
            <p className="subtitle">{convertToCurrency(sum)}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionDetail;
