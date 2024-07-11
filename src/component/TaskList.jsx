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
  const dispatch = useDispatch();

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

  const handleRemoveTodo = () => {
    dispatch(removeTodo(todo.id));
  };

  return (
    <li className="">
      <div>{todo.text}</div>
      <div>
        <button className="" onClick={() => setIsEditing(true)}>
          <FiEdit />
        </button>
        <button className="" onClick={handleRemoveTodo}>
          <MdDelete />
        </button>
      </div>
      <PopUp isOpen={isEditing} onClose={() => setIsEditing(false)}>
        <h2 className="">Edit Todo</h2>
        <input
          type="text"
          className=""
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
        />
        <button className="" onClick={handleUpdate}>
          <BiSolidSave />
        </button>
      </PopUp>
    </li>
  );
};

export default TaskList;
