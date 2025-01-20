import { ADD } from "./actions";

const initialState = {
  messages: [],
};

export const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    default:
      return state;
  }
};
