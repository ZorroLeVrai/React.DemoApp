import React, { useState, useRef } from "react";
import InputItem from "./components/InputItem";
import List from "./components/List";

export default function TaskList() {
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
      <h1>Handle your tasks</h1>
      <InputItem onAddTask={handleAddTask} />
      <List tasks={tasks} onRemoveTask={handleRemoveTask} />
    </>
  );
}
