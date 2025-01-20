import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store"; // Import the Redux store
// import DisplayMessages from "C:/Users/kita/Desktop/Projects/react-redux-app/src/components/DisplayMessages.js"; // Import the refactored component
import reportWebVitals from "./reportWebVitals";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// Performance Measurement
reportWebVitals();
