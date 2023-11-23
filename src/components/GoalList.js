import React, { useState } from "react";
function GoalList() {
  const [goal, setGoal] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const handleChange = (e) => {
    const inputText = e.target.value;
    setGoal(inputText);
    setIsButtonDisabled(inputText.length === 1 ? false : true);
  };
  const addTask = () => {
    if (goal.length === 0) {
      console.log("plase Enter the task");
    } else {
      console.log(goal);
      setGoal(" ");
      setIsButtonDisabled(true);
    }
  };
  return (
    <div>
      <h1>Goal List</h1>
      <input type="text" value={goal} onChange={handleChange} />
      <button
        onClick={addTask}
        disabled={isButtonDisabled}
        style={{ backgroundColor: isButtonDisabled ? "lightcoral" : "red" }}
      >
        Add Goal
      </button>
      {/* <p>{goal}</p> */}
    </div>
  );
}
export default GoalList;
