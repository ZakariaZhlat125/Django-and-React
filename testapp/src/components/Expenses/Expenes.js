import React from "react";
import ExpenesItem from "./ExpenesItem";
import Card from "../UI/Card";
import classes from "./Expenes.module.css";

const Expenses = (props) => {
  let expenseList = <h2>No Expenes found. Startadding Some!</h2>;

  if (props.items.length > 0) {
    expenseList = (
      <ul>
        {props.items.map((expense) => (
          <ExpenesItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    );
  }
  if (props.error) {
    expenseList = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    expenseList = "Loading Epenses...";
  }
  return <Card className={classes.expenses}>{expenseList}</Card>;
};

export default Expenses;
