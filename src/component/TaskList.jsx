import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../utils/todoSlice";
import PopUp from "./PopUp";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { BiSolidSave } from "react-icons/bi";

const TaskList = ({ todo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);
  const [isCompleted, setIsCompleted] = useState(todo.completed || false);
  const dispatch = useDispatch();


  //funtion to update the todo
  const handleUpdate = () => {
    if (editValue.trim()) {
      dispatch(
        editTodo({
          id: todo.id,
          newValue: editValue,
        })
      );
      setIsEditing(false);
    }
  };
//function to remove the todo
  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };
//function to toggle the todo
  const toggleCompleted = () => {
    setIsCompleted(!isCompleted);
    dispatch(
      editTodo({
        id: todo.id,
        newValue: editValue,
        completed: !isCompleted,
      })
    );
  };

  return (
    <li className="p-4 bg-white shadow rounded-lg mb-2 w-full max-w-md">
      <div className="flex justify-between items-center gap-4 w-full">
        <div className="flex items-center justify-center">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={toggleCompleted}
            className="mr-2"
          />
          <span
            className={`text-lg font-medium ${
              isCompleted ? "line-through" : ""
            }`}
          >
            {todo.text}
          </span>
        </div>
        <div className="flex space-x-2">
          <button
            className={`text-blue-500 hover:text-blue-700' ${
              isCompleted ? "hidden" : ""
            }`}
            onClick={() => setIsEditing(true)}
          >
            <FiEdit size={20} />
          </button>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={handleRemoveTodo}
          >
            <MdDelete size={20} />
          </button>
        </div>
      </div>

      <PopUp isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <h2 className="text-xl font-semibold mb-4">Edit Todo</h2>
        <input
          type="text"
          className="border p-2 rounded w-full mb-2"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
        <button
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
          onClick={handleUpdate}
        >
          <BiSolidSave size={20} />
        </button>
      </PopUp>
    </li>
  );
};

export default TaskList;
