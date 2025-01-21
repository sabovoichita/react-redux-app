import { configureStore } from "@reduxjs/toolkit"; // Import from Redux Toolkit
import { messageReducer } from "./reducers"; // Import your reducer

// Create the store using configureStore
const store = configureStore({
  reducer: messageReducer, // Specify the reducer
  devTools: process.env.NODE_ENV !== "production", // Enable Redux DevTools in development mode
});

export default store;
