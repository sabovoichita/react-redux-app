import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
// import PropTypes from "prop-types";

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      messages: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here
  handleChange(e) {
    this.setState({
      input: e.target.value,
    });
  }

  submitMessage() {
    this.setState((prevState) => ({
      messages: [...prevState.messages, prevState.input],
      input: "",
    }));
  }

  render() {
    const renderMessages = this.state.messages.map((message, index) => (
      <li key={index}>{message}</li>
    ));
    return (
      <div>
        <h2>Type in a new Message:</h2>
        {/* Render an input, button, and ul below this line */}
        <input
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <button onClick={this.submitMessage}>Add button</button>
        <ul>{renderMessages}</ul>
        {/* Change code above this line */}
      </div>
    );
  }
}

// Render All Components
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DisplayMessages />
    {/* <App /> */}
  </React.StrictMode>
);

// Performance Measurement
reportWebVitals();
