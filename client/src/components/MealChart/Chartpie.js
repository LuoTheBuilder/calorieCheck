import "./ChartPie.css";
import BarHeightFunctionality from "../Functions/barHeightFunction";
import { Fragment } from "react/cjs/react.production.min";
import { useEffect } from "react";

const ChartPie = (props) => {
  let barFillHeight = "0%";

  let totalcals = props.meals.reduce((a, meal) => (a = a + meal.calories), 0);
  const piefill = 360 - (totalcals / (props.maxval * 5)) * 360;

  useEffect(() => {
    props.totalCal(piefill);
  }, [piefill]);

  return (
    <Fragment>
      <div
        className="piechart"
        style={{
          background: `conic-gradient(#EFDAD7 ${piefill}deg, lightblue 0 0deg, #1572A1 0)`,
        }}
      ></div>
    </Fragment>
  );
};

export default ChartPie;
