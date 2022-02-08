const AddMealButton = (props) => {
  const showAddMealForm = () => {
    props.onClickAdd(true);
  };
  return (
    <button className="AddMealButton" onClick={showAddMealForm}>
      Add New Meal
    </button>
  );
};

export default AddMealButton;
