import React, { useContext } from "react";
import { TaskListContext } from "../TaskListWithContext";

const List = () => {
  const { tasks, onRemoveTask } = useContext(TaskListContext);

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
