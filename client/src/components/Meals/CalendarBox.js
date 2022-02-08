import React from "react";
import "./calendarbox.css";
import MealCard from "./MealCard";
const CalendarBox = (props) => {
  const toDelete = (deletekey) => {
    props.toDelete(deletekey);
  };

  return (
    <div className="calendarbox">
      <MealCard
        meals={props.meals}
        day={"day1"}
        dow={"Mon"}
        toDelete={toDelete}
      />
      <MealCard
        meals={props.meals}
        day={"day2"}
        dow={"Tue"}
        toDelete={toDelete}
      />
      <MealCard
        meals={props.meals}
        day={"day3"}
        dow={"Wed"}
        toDelete={toDelete}
      />
      <MealCard
        meals={props.meals}
        day={"day4"}
        dow={"Thurs"}
        toDelete={toDelete}
      />
      <MealCard
        meals={props.meals}
        day={"day5"}
        dow={"Fri"}
        toDelete={toDelete}
      />
    </div>
  );
};

export default CalendarBox;
