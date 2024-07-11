import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlice";

const appStore = configureStore({
  reducer: {
    todo: todoSlice,
  },
});

export default appStore;
