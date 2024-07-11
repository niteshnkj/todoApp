import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import { useSelector } from "react-redux";

const TodoApp = () => {
  const todos = useSelector((store) => store.todo.todos);

  return (
    <div className="flex flex-col gap-8 items-center">
      <TaskInput />
      <ul>
        {todos.map((todo) => (
          <TaskList key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
