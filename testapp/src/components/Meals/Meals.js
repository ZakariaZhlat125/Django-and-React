import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";
import AddItem from "./AddMealItem/AddItem";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AddItem />
      <AvailableMeals />
    </Fragment>
  );
};
export default Meals;
