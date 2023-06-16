import { faApple, faAmazonPay } from "@fortawesome/free-brands-svg-icons";
const TYPES_PAYMENT = { PAYMENT: "Payment", CREDIT: "Credit" };

const STATUS = { PENDING: "Pending", APPROVED: "Approved" };

export const LATEST_TRANSACTIONS = [
  {
    _id: "bdF8e3bgs9nmaQbdF",
    type: TYPES_PAYMENT.CREDIT,
    sum: 14.06,
    name: "Apple",
    description: "Card Number Used",
    date: new Date("06-16-2023"),
    status: STATUS.PENDING,
    authorizedUser: "Diana",
    icon: faApple,
    deposit: "3",
  },
  {
    _id: "",
    type: TYPES_PAYMENT.PAYMENT,
    sum: 174.0,
    name: "Payment",
    description: "From JPMorgan Chase Bank National Association",
    date: new Date("06-15-2023"),
    status: STATUS.APPROVED,
    authorizedUser: "admin",
    icon: faAmazonPay,
    deposit: "",
  },
  {
    _id: "bRco8PGhEhEidow4q",
    type: TYPES_PAYMENT.CREDIT,
    sum: 3.24,
    name: "Apple",
    description: "Card Number Used",
    date: new Date("06-13-2023"),
    status: STATUS.APPROVED,
    authorizedUser: "Diana",
    icon: faApple,
    deposit: "3",
  },
  {
    _id: "8pYHCPT9cQBoeJMCT",
    type: TYPES_PAYMENT.PAYMENT,
    sum: 99.71,
    name: "Payment",
    description: "From JPMorgan Chase Bank National Association",
    date: new Date("06-12-2023"),
    status: STATUS.APPROVED,
    authorizedUser: "admin",
    icon: faAmazonPay,
    deposit: "",
  },
  {
    _id: "bRqarPGhEhEidow4q",
    type: TYPES_PAYMENT.PAYMENT,
    sum: 73.58,
    name: "Payment",
    description: "From JPMorgan Chase Bank National Association",
    date: new Date("06-11-2023"),
    status: STATUS.APPROVED,
    authorizedUser: "admin",
    icon: faAmazonPay,
    deposit: "9",
  },
  {
    _id: "zdG8e8EFs9nmaQbdF",
    type: TYPES_PAYMENT.CREDIT,
    sum: 24.61,
    name: "IKEA",
    description: "Round Rock, TX",
    date: new Date("02-10-2023"),
    status: STATUS.APPROVED,
    authorizedUser: "admin",
    icon: faApple,
    deposit: "2",
  },
  {
    _id: "8CnasPT4xZBoeJMCT",
    type: TYPES_PAYMENT.CREDIT,
    sum: 24.61,
    name: "Target",
    description: "Cedar Park, TX",
    date: new Date("02-12-2023"),
    status: STATUS.APPROVED,
    authorizedUser: "admin",
    icon: faAmazonPay,
    deposit: "",
  },
];
