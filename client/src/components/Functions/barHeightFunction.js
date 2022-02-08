import React from "react";

const BarHeightFunctionality = (props) => {
  const sum = props.reduce((a, v) => (a = a + v.calories), 0);

  return <div>{sum}</div>;
};

export default BarHeightFunctionality;
