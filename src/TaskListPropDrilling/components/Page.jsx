import React from "react";
import InputItem from "./InputItem";
import List from "./List";

export default function Page({ onAddTask, tasks, onRemoveTask }) {
  return (
    <>
      <h1>Handle your tasks</h1>
      <InputItem onAddTask={onAddTask} />
      <List tasks={tasks} onRemoveTask={onRemoveTask} />
    </>
  );
}
