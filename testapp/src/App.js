import React, { useEffect, useState } from "react";
import Expenses from "./components/Expenses/Expenes";
import NewExpense from "./components/NewExpense/NewExpense";
import useHttp from "./hooks/use-http";

function App() {
  const [expenses, setExpenses] = useState([]);
  const { isloading, error, sendRequest: fetchExpense } = useHttp();

  useEffect(() => {
    const transformExpense = (expenseObj) => {
      const loadedTasks = [];

      for (const key in expenseObj) {
        loadedTasks.push({
          id: key,
          title: expenseObj[key].title,
          amount: expenseObj[key].amount,
          date: expenseObj[key].date,
        });
      }
      setExpenses(loadedTasks);
    };
    fetchExpense(
      {
        url: "http://127.0.0.1:8000/api/",
      },
      transformExpense
    );
  }, [fetchExpense]);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <h2>Let's get started</h2>
      <NewExpense onAddExpense={addExpenseHandler} />

      <Expenses
        items={expenses}
        loading={isloading}
        error={error}
        onFetch={fetchExpense}
      />
    </div>
  );
}
export default App;
