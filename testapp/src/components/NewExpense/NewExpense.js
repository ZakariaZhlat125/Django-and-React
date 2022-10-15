import React, { useState } from "react";
import useHttp from "../../hooks/use-http";
import ExpenseForm from "./ExpenseForm";

import classes from "./NewExpense.module.css";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const { isloading, error, sendRequest: sendExpense } = useHttp();

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: enteredExpenseData.name,
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const enterExpenseHandler = async (expense) => {
    sendExpense({
      url: "http://127.0.0.1:8000/api/create/",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        title: expense.title,
        amount: expense.amount,
        date: expense.date,
      },
    });
    SaveExpenseDataHandler.bind(expense);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className={classes["new-expense"]}>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expenes</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={enterExpenseHandler}
          onCancel={stopEditingHandler}
          loading={isloading}
        />
      )}
    </div>
  );
};

export default NewExpense;
