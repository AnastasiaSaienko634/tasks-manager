import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  language: "Ukranian",
};

export const languageSliceReducer = createSlice({
  name: "language",
  initialState: initialState,
  reducers: {
    changeLang: (state, action) => {
      return { ...state, language: action.payload };
    },
  },
});

export const { changeLang } = languageSliceReducer.actions;
export default languageSliceReducer.reducer;
