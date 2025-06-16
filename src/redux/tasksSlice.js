import { createSlice } from "@reduxjs/toolkit";

const tasksSliceReducer = createSlice({
  name: "tasks",
  initialState: { items: [] },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    toggleCompleted: (state, action) => {
      for (const task of state.items) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

export const { addTask, deleteTask, toggleCompleted } =
  tasksSliceReducer.actions;
export default tasksSliceReducer.reducer;
