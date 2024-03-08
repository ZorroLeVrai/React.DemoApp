import React, { useState } from "react";

const InputItem = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");

  const addTask = (taskName) => {
    onAddTask(taskName);
    setTaskName("");
  };

  const handleClick = () => addTask(taskName);

  const handleChange = (event) => setTaskName(event.target.value);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addTask(taskName);
    }
  };

  return (
    <div>
      <label htmlFor="taskItem">Task name:</label>
      <input
        id="taskItem"
        type="text"
        name="taskItem"
        value={taskName}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleClick}>Add Task</button>
    </div>
  );
};

export default InputItem;
