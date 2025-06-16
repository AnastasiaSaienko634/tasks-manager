import { configureStore } from "@reduxjs/toolkit";
import languageSliceReducer from "./languageSlice.js";
import tasksSliceReducer from "./tasksSlice.js";
import filterSlice from "./filterSlice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistTasksConfig = {
  key: "tasks",
  storage,
  whitelist: ["items"],
};

const persistLanguageConfig = {
  key: "language",
  storage,
};

const persisitFilterConfig = {
  key: "filter",
  storage,
};

const persisitFilterReducer = persistReducer(persisitFilterConfig, filterSlice);

const persistedTasksReducer = persistReducer(
  persistTasksConfig,
  tasksSliceReducer
);

const persistedLanguageReducer = persistReducer(
  persistLanguageConfig,
  languageSliceReducer
);

export const store = configureStore({
  reducer: {
    local: persistedLanguageReducer,
    tasks: persistedTasksReducer,
    filters: persisitFilterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
