// redux/actions.js
export const ADD = "ADD"; // Action type

// Action creator
export const addMessage = (message) => ({
  type: ADD,
  message,
});
