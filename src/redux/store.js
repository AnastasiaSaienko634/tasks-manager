import { configureStore, createAction } from "@reduxjs/toolkit";

const initialState = {
  balance: {
    value: 123,
  },
  local: {
    language: "Ukranian",
  },
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "locale/changeLanguage":
      return {
        ...state,
        local: {
          language: action.payload,
        },
      };
  }
  return state;
};

export const store = configureStore({
  reducer: rootReducer,
});

export const deposit = createAction("balance/deposit");
export const withdraw = createAction("balance/withdraw");

export const changeLang = createAction("locale/changeLanguage");
