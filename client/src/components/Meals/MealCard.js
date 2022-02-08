import React from "react";
import "./mealcard.css";
import MealEntry from "./MealEntry";
import TotalDayCal from "../Functions/TotalDayCal";

const MealCard = (props) => {
  const filtermeals = props.meals.filter((meal) => {
    return meal.date.includes(props.day);
  });
  const toDelete = (deletekey) => {
    props.toDelete(deletekey);
  };

  return (
    <div className="mealcard">
      <div className="datetitle">{props.dow}</div>
      <div className="hordiv"></div>
      <div className="totalcal">
        <TotalDayCal array={filtermeals} />
      </div>
      <div className="hordiv"></div>
      <div className="itemholder">
        {filtermeals.map((meal) => (
          <MealEntry
            key={meal._id}
            id={meal._id}
            name={meal.name}
            calories={meal.calories}
            toDelete={toDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default MealCard;
