import React, { useState } from "react";
import "./addmeal.css";
import AddMealButton from "./AddMealButton";
import AddMealForm from "./AddMealform";
const AddMeal = (props) => {
  const [addMealStatus, setAddMealStatus] = useState(false);
  const onSaveMeal = (enteredMealData) => {
    const mealsToAdd = { ...enteredMealData, key: Math.random().toString() };
    props.addSaveMeal(mealsToAdd);
  };

  const setFormStatus = (event) => {
    setAddMealStatus(event);
  };

  if (addMealStatus === true) {
    return (
      <div className="addMealDiv">
        <AddMealForm onSaveMeal={onSaveMeal} cancelForm={setFormStatus} />
      </div>
    );
  } else {
    return <AddMealButton onClickAdd={setFormStatus} />;
  }
};

export default AddMeal;
