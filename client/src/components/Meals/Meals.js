import React, { useEffect, useState } from "react";
import "./Meals.css";
import MealChart from "../MealChart/MealChart.js";
import CalendarBox from "./CalendarBox.js";
import AddMeal from "../AddMeal/AddMeal.js";

const Meals = (props) => {
  const [mealset, setMealset] = useState([]);

  async function mealImportHandler() {
    const response = await fetch(
      "https://shrouded-caverns-49881.herokuapp.com/calories"
    );
    const data = await response.json();

    let datam = [];
    for (const key in data) {
      datam.push(data[key]);
    }
    setMealset(datam);
  }

  useEffect(() => {
    mealImportHandler();
  }, []);

  async function addMealToArray(body) {
    const reponse = await fetch(
      "https://shrouded-caverns-49881.herokuapp.com/calories",
      {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json" },
      }
    );
    mealImportHandler();
  }

  async function toDelete(deletekey) {
    const response = await fetch(
      "https://shrouded-caverns-49881.herokuapp.com/calories/" + deletekey,
      {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      }
    );
    mealImportHandler();
  }

  // const toDelete = (deletekey) => {
  //   console.log(deletekey);
  // };

  return (
    <div className="AppBox">
      <h1>Your Calorie Schedule</h1>
      <div>
        <AddMeal addSaveMeal={addMealToArray} />
      </div>
      <MealChart meals={mealset} />
      <CalendarBox meals={mealset} toDelete={toDelete} />
    </div>
  );
};

export default Meals;
