import React from "react";

const TotalDayCal = (props) => {
  const sum = props.array.reduce((a, v) => (a = a + v.calories), 0);

  return <div>{sum} kcal</div>;
};

export default TotalDayCal;
