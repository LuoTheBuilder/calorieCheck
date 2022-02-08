import React from "react";

const AppBox = (props) => {
  const classes = "AppBox" + props.className;
  return <div className={classes}>{props.childen}</div>;
};

export default AppBox;
