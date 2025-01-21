import React, { useState } from "react";
import { connect } from "react-redux";
import { addMessage } from "../redux/actions";

const DisplayMessages = ({ messages, submitNewMessage }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => setInput(e.target.value);

  const submitMessage = () => {
    if (input.trim() !== "") {
      submitNewMessage(input); // Call prop function mapped from dispatch
      setInput(""); // Clear the input field
    }
  };

  return (
    <div>
      <h2>Type in a new Message:</h2>
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={submitMessage}>Add Message</button>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
    </div>
  );
};

class Presentational extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <h3>This is a Presentational Component</h3>;
  }
}

// mapStateToProps to map state to component props
const mapStateToProps = (state) => ({
  messages: state.messages,
});

// mapDispatchToProps to map dispatch to component props
const mapDispatchToProps = (dispatch) => ({
  submitNewMessage: (message) => dispatch(addMessage(message)),
});

// Connect Redux to the component
export default connect(mapStateToProps, mapDispatchToProps)(Presentational);
