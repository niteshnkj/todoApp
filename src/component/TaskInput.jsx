import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../utils/todoSlice";

const TaskInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    if (input.trim()) {
      const newTodo = {
        id: Date.now(),
        text: input,
      };
      dispatch(addTodo(newTodo));
      setInput("");
    }
  };

  return (
    <div className="w-full flex gap-2">
      <input
        type="text"
        onChange={handleInput}
        value={input}
        placeholder="Add a Todo item"
        className="border p-2"
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default TaskInput;
