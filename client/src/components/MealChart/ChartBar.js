import "./ChartBar.css";
import BarHeightFunctionality from "../Functions/barHeightFunction";

const ChartBar = (props) => {
  let barFillHeight = "0%";

  const filtermeals = props.meals.filter((meal) => {
    return meal.date.includes(props.day);
  });

  const life = parseInt(BarHeightFunctionality(filtermeals).props.children);
  //   console.log(life);
  barFillHeight = (life / props.maxval) * 100 + "%";
  //   console.log(barFillHeight);

  return (
    <div className="chart-bar">
      <div className="chart-bar__inner ">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.dow}</div>
    </div>
  );
};

export default ChartBar;
