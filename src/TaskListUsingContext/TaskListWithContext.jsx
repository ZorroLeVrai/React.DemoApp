import React, { useState, useRef, createContext } from "react";
import Page from "./components/Page";

export const TaskListContext = createContext("TaskListContext");

export default function TaskListWithContext() {
  //tasks Array<{id:number, title:string}>
  const [tasks, setTasks] = useState([]);
  const taskId = useRef(1);

  const handleAddTask = (title) => {
    setTasks((tasks) => [...tasks, { title: title, id: taskId.current }]);
    taskId.current += 1;
  };

  const handleRemoveTask = (id) =>
    setTasks((tasks) => tasks.filter((item) => item.id !== id));

  return (
    <>
      <TaskListContext.Provider
        value={{
          onAddTask: handleAddTask,
          tasks: tasks,
          onRemoveTask: handleRemoveTask,
        }}
      >
        <Page />
      </TaskListContext.Provider>
    </>
  );
}
