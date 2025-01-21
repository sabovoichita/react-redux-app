import { addMessage } from "./actions";

// Map Redux state to React props
export const mapStateToProps = (state) => ({
  messages: state,
});

// Map Redux dispatch to React props
export const mapDispatchToProps = (dispatch) => ({
  submitNewMessage: (newMessage) => dispatch(addMessage(newMessage)),
});
