import React, { useRef } from "react";
import classes from "./AddItemForm.module.css";

const AddItemForm = (props) => {
  const nameRef = useRef("");
  const descriptionRef = useRef("");
  const priceRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();
    console.log("test2");
    const meals = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      price: priceRef.current.value,
    };
    props.onAddMeal(meals);
  };

  const modalAction = (
    <React.Fragment>
      <form className={classes["form-control"]} onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameRef} />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea rows="5" id="description" ref={descriptionRef} />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input type="number" id="price" ref={priceRef} />
        </div>
        <div className={classes.actions}>
          <button type="button" onClick={props.onClose}>
            Close
          </button>
          <button className={classes.submit}>Add Meals</button>
        </div>
      </form>
    </React.Fragment>
  );

  return <div>{modalAction}</div>;
};
export default AddItemForm;
