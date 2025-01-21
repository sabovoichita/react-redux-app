import React from "react";

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
    });
  }

  submitMessage() {
    const { submitNewMessage } = this.props; // Access Redux action from props
    submitNewMessage(this.state.input);
    this.setState({
      input: "",
    });
  }

  render() {
    const { messages } = this.props; // Access Redux state from props

    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input value={this.state.input} onChange={this.handleChange} />
        <br />
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {messages.map((message, idx) => (
            <li key={idx}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DisplayMessages;
