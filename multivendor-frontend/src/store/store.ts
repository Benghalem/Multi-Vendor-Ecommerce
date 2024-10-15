import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import rootReducer from "./rootReducer"; // You will define rootReducer later

// Create the store
const store = configureStore({
  reducer: rootReducer,
});

// TypeScript types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// Custom hook to use dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
