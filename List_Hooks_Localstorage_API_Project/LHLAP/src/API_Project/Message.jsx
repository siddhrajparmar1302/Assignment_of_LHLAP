import React, { Component } from "react";

class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0, 
    };
  }

 
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`Component updated! New count: ${this.state.count}`);
    }
  }
 
  componentWillUnmount() {
    console.log("Component is about to unmount!");
  }

  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h2>Lifecycle Demo</h2>
        <p>Counter: {this.state.count}</p>
        <button
          onClick={this.increment}
          style={{
            margin: "5px",
            padding: "10px 15px",
            backgroundColor: "#4caf50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Increment
        </button>
        <button
          onClick={this.decrement}
          style={{
            margin: "5px",
            padding: "10px 15px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Decrement
        </button>
      </div>
    );
  }
}

export default Message;
