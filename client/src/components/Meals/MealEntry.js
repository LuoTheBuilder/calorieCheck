import React from "react";
import "./mealentry.css";

const MealEntry = (props) => {
  const deleteMeal = (event) => {
    props.toDelete(props.id);
  };
  return (
    <div className="item" value={props.id} onClick={deleteMeal}>
      <p>{props.name}</p>
      <p className="calcount">{props.calories}</p>
    </div>
  );
};

export default MealEntry;
