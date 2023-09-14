import React from "react";

const List = ({ tasks, onRemoveTask }) => {
  return (
    <>
      <div>Task List</div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task.title}</span>
            <button onClick={() => onRemoveTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default List;
