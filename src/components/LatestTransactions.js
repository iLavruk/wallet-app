import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { LATEST_TRANSACTIONS } from "../enums";
import { convertDateToText } from "../helpers";
import { convertToCurrency } from "../helpers";

const LatestTransactions = () => {
  return (
    <div className="mt-3">
      <h2 className="big-block-title">Latest Transactions</h2>
      <div className="block">
        {LATEST_TRANSACTIONS.map((item) => {
          const {
            _id,
            type,
            sum,
            name,
            description,
            date,
            status,
            authorizedUser,
            icon,
            deposit,
          } = item;
          return (
            <div key={_id} className="block-latest-transactions">
              <Link to={`/${_id}`}>
                <div className="product-block">
                  <div>
                    <div className="square-icon">
                      <FontAwesomeIcon icon={icon} className="icons" />
                    </div>
                  </div>
                  <div className="product-entry-block">
                    <div>
                      <h3 className="brand-title">{name}</h3>
                    </div>
                    <p className="sum">
                      {type === "Payment" ? "+" : null}
                      {convertToCurrency(sum)}
                    </p>
                    <div className="w-100">
                      <div className="block-deposit">
                        <p className="description short-text">
                          {status === "Pending" ? `${status} – ` : null}
                          {description}
                        </p>
                        {deposit ? (
                          <p className="description deposit">{`${deposit}%`}</p>
                        ) : null}
                      </div>
                    </div>
                    <p className="description">
                      {authorizedUser === "admin"
                        ? null
                        : `${authorizedUser} – `}
                      {convertDateToText(date)}
                    </p>
                  </div>
                  <div>
                    <FontAwesomeIcon
                      icon={faChevronRight}
                      className="arrow-icon"
                    />
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LatestTransactions;
