import React, { useState } from "react";
import "./setcalorielimit.css";
const SetCalorieLimit = (props) => {
  const calorieLimitHandler = (event) => {
    props.setCalorieLimit(parseInt(event.target.value));
  };
  return (
    <div className="calorieselector">
      <label>Set Calorie Goal</label>
      <select onChange={calorieLimitHandler}>
        <option>3000</option>
        <option>2500</option>
        <option>2000</option>
        <option>1500</option>
        <option>1300</option>
      </select>
    </div>
  );
};
export default SetCalorieLimit;
