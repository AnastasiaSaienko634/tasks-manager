import { createSlice } from "@reduxjs/toolkit";

const tasksSliceReducer = createSlice({
  name: "tasks",
  initialState: { items: [] },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((item) => item !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = tasksSliceReducer.actions;
export default tasksSliceReducer.reducer;
