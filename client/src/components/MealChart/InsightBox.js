const InsightBox = (props) => {
  let hat = null;
  let pat = null;
  if (props.maxcal > 2000) {
    hat = "You should consider dropping your calorie goal.";
  }

  if (props.totalCal > 270) {
    pat = "You've not eaten much so far this week. Good job!";
  } else if (props.totalCal < 180) {
    pat = "You've consumed over half your weekly allowance.";
  } else if (props.totalCal < 0) {
    pat = "You've eaten too much food this week. Slow down";
  }

  return (
    <div className="insightheader">
      <h1>Your Insights</h1>
      <p></p>
      <p>{pat}</p>
      <p>{hat}</p>
    </div>
  );
};

export default InsightBox;
