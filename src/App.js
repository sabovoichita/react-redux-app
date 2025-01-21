import React from "react";
import { connect } from "react-redux";
import DisplayMessages from "./components/DisplayMessages";
import { mapStateToProps, mapDispatchToProps } from "./redux/connect";

// Create the container component
const Container = connect(mapStateToProps, mapDispatchToProps)(DisplayMessages);

const App = () => {
  return (
    <div>
      <Container />
    </div>
  );
};

export default App;
