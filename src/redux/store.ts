import { configureStore, combineReducers } from "@reduxjs/toolkit";
import generalSlice from "./generalSlice";

const rootReducer = combineReducers({
  generalSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
