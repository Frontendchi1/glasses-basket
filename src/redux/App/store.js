import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../features/basketSlice"; // Update the import path
import counterReducer from "../features/counterSlice"; // Update the import path

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    counter: counterReducer,
  },
});
