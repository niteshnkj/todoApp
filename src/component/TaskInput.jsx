import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../utils/todoSlice";

const TaskInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  //function to handle input
  const handleInput = (e) => {
    setInput(e.target.value);
  };
  // function to handle submit
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
  // Function to handle key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <div className="flex h-full w-8/12 items-center justify-center shadow-2xl rounded-lg mt-8">
      <input
        type="text"
        onChange={handleInput}
        onKeyDown={handleKeyPress}
        value={input}
        placeholder="Add a Todo item"
        className="w-[90%] border-2 border-slate-400 p-2 rounded-lg rounded-r-none border-r-0 mr-0 focus:outline-none bg-orange-100"
      />
      <button
        onClick={handleSubmit}
        className="p-2 border-2 w-[10%] border-slate-400 rounded-lg border-l-0 ml-0 rounded-l-none bg-purple-100"
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
