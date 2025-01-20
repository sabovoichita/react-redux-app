import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMessage } from "../redux/actions";

const DisplayMessages = () => {
  const [input, setInput] = useState("");
  const messages = useSelector((state) => state.messages); // Target only the messages slice
  const dispatch = useDispatch();

  const handleChange = (e) => setInput(e.target.value);

  const submitMessage = () => {
    if (input.trim() !== "") {
      dispatch(addMessage(input)); // Dispatch the addMessage action
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

export default DisplayMessages;
