import React, { useState } from "react";
import ErrorModal from "../UI/ErrorModal";
import "./addmealform.css";

const AddMealForm = (props) => {
  //Add the useState Variables
  const [enteredName, setEnteredName] = useState("");
  const [enteredCalories, setEnteredCalories] = useState("");
  const [enteredDay, setEnteredDay] = useState("");
  const [error, setError] = useState(false);
  //Add the change handlers
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const caloriesChangeHandler = (event) => {
    setEnteredCalories(event.target.value);
  };

  const dayChangeHandler = (event) => {
    setEnteredDay(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const meal = {
      name: enteredName,
      calories: parseInt(enteredCalories),
      date: enteredDay,
    };
    if (
      enteredName.length === 0 ||
      meal.calories < 0 ||
      meal.date === undefined
    ) {
      setError(true);
      return;
    } else {
      props.onSaveMeal(meal);
      setEnteredName("");
      setEnteredCalories("");
    }
  };
  const cancelError = (event) => {
    setError(event);
  };

  const cancelForm = () => {
    props.cancelForm(false);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title="Invalid entry"
          message="Please try again."
          cancelError={cancelError}
        />
      )}
      <form className="form" onSubmit={submitHandler}>
        <div className="entry">
          <label>Meal Name</label>
          <input type="text" value={enteredName} onChange={nameChangeHandler} />
        </div>
        <div className="entry">
          <label>Day</label>
          <select onChange={dayChangeHandler}>
            <option value=""></option>
            <option value="day1">Mon</option>
            <option value="day2">Tue</option>
            <option value="day3">Wed</option>
            <option value="day4">Thurs</option>
            <option value="day5">Fri</option>
          </select>
        </div>
        <div className="entry">
          <label>Calories</label>
          <input
            type="number"
            value={enteredCalories}
            onChange={caloriesChangeHandler}
          />
        </div>

        <button type="submit">Submit</button>
        <button onClick={cancelForm}>Cancel</button>
      </form>
    </div>
  );
};

export default AddMealForm;
