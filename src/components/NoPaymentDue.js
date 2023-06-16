import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const NoPaymentDue = () => {
  return (
    <div className="block block-equal-height">
      <h2 className="block-title">No Payment Due</h2>
      <p className="description">
        You’ve paid your <strong>June</strong> balance
      </p>
      <div className="check-block">
        <div className="circle-icon">
          <FontAwesomeIcon icon={faCheck} className="fa-check" />
        </div>
      </div>
    </div>
  );
};

export default NoPaymentDue;
