import React, { useState } from "react";
import "./mealchart.css";
import ChartBar from "./ChartBar";
import SetCalorieLimit from "./SetCalorieLimit";
import ChartPie from "./Chartpie";
import InsightBox from "./InsightBox";
const MealChart = (props) => {
  const [calCheck, setCalCheck] = useState(2500);
  const [totalCal, setcal] = useState();

  const setCalorieLimit = (event) => {
    setCalCheck(event);
  };

  const totalCalHandler = (event) => {
    setcal(event);
  };

  return (
    <div>
      <SetCalorieLimit setCalorieLimit={setCalorieLimit} />
      <div className="chartscontainer">
        <div className="insightbox">
          <InsightBox maxcal={calCheck} totalCal={totalCal} />
        </div>

        <div className="piebox">
          <ChartPie
            meals={props.meals}
            day={"day1"}
            dow={"Mon"}
            maxval={calCheck}
            totalCal={totalCalHandler}
          />
        </div>
        <div className="chartbox">
          <ChartBar
            meals={props.meals}
            day={"day1"}
            dow={"Mon"}
            maxval={calCheck}
          />
          <ChartBar
            meals={props.meals}
            day={"day2"}
            dow={"Tue"}
            maxval={calCheck}
          />
          <ChartBar
            meals={props.meals}
            day={"day3"}
            dow={"Wed"}
            maxval={calCheck}
          />
          <ChartBar
            meals={props.meals}
            day={"day4"}
            dow={"Thurs"}
            maxval={calCheck}
          />
          <ChartBar
            meals={props.meals}
            day={"day5"}
            dow={"Fri"}
            maxval={calCheck}
          />
        </div>
      </div>
    </div>
  );
};

export default MealChart;
