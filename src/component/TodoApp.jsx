import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { useSelector } from "react-redux";

const TodoApp = () => {
  const todos = useSelector((store) => store.todo.todos);
  console.log("available in reduxstore:", todos);

  return (
    <>
      <TaskInput />

      <ul>
        {todos.map((todo) => (
          <TaskList key={todo.id} todo={todo} />
        ))}
      </ul>
    </>
  );
};

export default TodoApp;
