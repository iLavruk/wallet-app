import startDay from "date-fns/startOfDay";
import subDays from "date-fns/subDays";
import startOfWeek from "date-fns/startOfWeek";
import format from "date-fns/format";
import isWithinInterval from "date-fns/isWithinInterval";

export const convertDateToText = (date) => {
  const currentDate = new Date();
  const todayStart = startDay(currentDate);
  const yesterdayStartDate = subDays(todayStart, 1);
  const dayOfWeek = startOfWeek(todayStart);

  if (
    isWithinInterval(date, {
      start: todayStart,
      end: currentDate,
    })
  ) {
    return "Today";
  }
  if (
    isWithinInterval(date, {
      start: yesterdayStartDate,
      end: todayStart,
    })
  ) {
    return "Yesterday";
  }
  if (
    isWithinInterval(date, {
      start: dayOfWeek,
      end: todayStart,
    })
  ) {
    return format(date, "eeee");
  } else {
    return format(date, "MM/dd/yyyy");
  }
};


export const convertToCurrency = (currency) => {
  return currency.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};
