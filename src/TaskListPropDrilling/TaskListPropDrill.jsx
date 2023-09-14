import React, { useState, useRef } from "react";
import Page from "./components/Page";

export default function TaskListPropDrill() {
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
      <Page
        onAddTask={handleAddTask}
        tasks={tasks}
        onRemoveTask={handleRemoveTask}
      />
    </>
  );
}
