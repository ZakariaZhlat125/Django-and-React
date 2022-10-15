import React from "react";
import classes from "./ExpenesDate.module.css";
const ExpensesDate = (props) => {
  const date =new Date(props.date)
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <div className={classes["epxense-date"]}>
      <div className={classes["epxense-date__month"]}>{month}</div>
      <div className={classes["epxense-date__year"]}>{year}</div>
      <div className={classes["epxense-date__day"]}>{day}</div>
    </div>
  );
};
export default ExpensesDate;
