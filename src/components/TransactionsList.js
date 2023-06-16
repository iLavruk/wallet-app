import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import CardBalance from "./CardBalance";
import DailyPoints from "./DailyPoints";
import NoPaymentDue from "./NoPaymentDue";
import LatestTransactions from "./LatestTransactions";

const TransactionsList = () => {
  return (
    <>
      <Row>
        <Col>
          <CardBalance />
          <DailyPoints />
        </Col>
        <Col>
          <NoPaymentDue />
        </Col>
      </Row>
      <Row>
        <Col>
          <LatestTransactions />
        </Col>
      </Row>
    </>
  );
};

export default TransactionsList;
