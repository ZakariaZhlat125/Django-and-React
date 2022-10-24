import React, { useState } from "react";

import AddItemForm from "./AddItemForm";
import Model from "../../UI/Modal";

import classes from "./AddItem.module.css";


let i = Math.floor(Math.random() * 10000);

const AddItem = () => {
  const [isShow, setIsShow] = useState(false);
  const onAddMealHandler = async (mealData) => {
    let id = "m" + i++;
    await fetch(
      "https://react-http-a6739-default-rtdb.firebaseio.com/meals/" +
        id +
        ".json",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: mealData.name,
          description: mealData.description,
          price: mealData.price,
        }),
      }
    );
    console.log("test");
  };
  const showHandler = () => {
    setIsShow(true);
  };
  const hideHandler = () => {
    setIsShow(false);
  };
 const classButton =`${classes.button}  ${classes.bump}`
  return (
    <React.Fragment>
      {!isShow && (
        <div className={classes.control}>
          <button className={classButton} onClick={showHandler}>
          Add Item
        </button>
        </div>
      )}
      {isShow && (
        <Model>
          <AddItemForm onClose={hideHandler} onAddMeal={onAddMealHandler} />
        </Model>
      )}
    </React.Fragment>
  );
};
export default AddItem;
