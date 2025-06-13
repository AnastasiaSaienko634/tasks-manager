import { configureStore } from "@reduxjs/toolkit";
import languageSliceReducer from "./languageSlice.js";
import tasksSliceReducer from "./tasksSlice.js";

export const store = configureStore({
  reducer: {
    local: languageSliceReducer,
    tasks: tasksSliceReducer,
  },
});
