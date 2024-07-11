import { createSlice } from "@reduxjs/toolkit";

const savedTodos = localStorage.getItem("todos");
//if there is any saved todos in the local storage then it will be used as initial state or else it will be an empty array
const initialState = savedTodos ? JSON.parse(savedTodos) : [];

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialState,
  },
  reducers: {
    //for pushing the todo to the state
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    //for removing the todo from the state
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    //for editing the todo
    editTodo: (state, action) => {
      const { id, newValue } = action.payload;

      const todo = state.todos.find((todo) => todo.id === id);
      //if the todo is found then the text will be updated
      if (todo) {
        todo.text = newValue;
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo } = todoSlice.actions;
export default todoSlice.reducer;
