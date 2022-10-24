import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";

const Checkout = (props) => {
  
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: streetInputHasError,
    valueChangeHandler: streetChangedHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreetInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredPostalCode,
    isValid: enteredPostalCodeIsValid,
    hasError: postalCodeInputHasError,
    valueChangeHandler: postalCodeChangedHandler,
    inputBlurHandler: postalCodeBlurHandler,
    reset: resetPostalCodeInput,
  } = useInput((value) => value.trim().length === 5);

  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangedHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput((value) => value.trim() !== "");

  const confirmHandler = (event) => {
    event.preventDefault();

    const formIsvalid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsvalid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });

    resetNameInput();
    resetCityInput();
    resetPostalCodeInput();
    resetStreetInput();
  };

  const nameControlClasses = `${classes.control} ${
    !nameInputHasError ? " " : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    !streetInputHasError ? "" : classes.invalid
  }`;

  const postalCodeControlClasses = `${classes.control} ${
    !postalCodeInputHasError ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    !cityInputHasError ? "" : classes.invalid
  }`;

  return (
    <form onSubmit={confirmHandler} className={classes.form}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className={classes['error-text']}>Name must not be empty.</p>
        )}
      </div>

      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          onChange={streetChangedHandler}
          onBlur={streetBlurHandler}
          value={enteredStreet}
        />
        {streetInputHasError && (
          <p className={classes['error-text']}>Please enter a valid street!</p>
        )}
      </div>

      <div className={postalCodeControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          onChange={postalCodeChangedHandler}
          onBlur={postalCodeBlurHandler}
          value={enteredPostalCode}
        />
        {postalCodeInputHasError && (
          <p className={classes['error-text']}>
            Please enter a valid postalCode (5 characters long)!
          </p>
        )}
      </div>

      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          onChange={cityChangedHandler}
          onBlur={cityBlurHandler}
          value={enteredCity}
        />
        {cityInputHasError && (
          <p className={classes['error-text']}>Please enter a valid city!</p>
        )}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
