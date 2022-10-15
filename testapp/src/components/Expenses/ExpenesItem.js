import React from "react";

import ExpensesDate from "./ExpenesDate";
import Card from "../UI/Card";
import classes from "./ExpenesItem.module.css";

const ExpenesItem = (props) => {
  return (
    <Card className={classes["expenes-item"]}>
      <ExpensesDate date={props.date} />
      <div className={classes["expenes-item_description"]}>
        <h2>{props.title}</h2>
        <div className={classes["expenes-item_price"]}>${props.amount}</div>
      </div>
    </Card>
  );
};
export default ExpenesItem;
