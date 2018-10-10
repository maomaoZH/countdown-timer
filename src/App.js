import React, { Component } from "react";
import "./App.css";
import CountdownTimer from "./countdownTimer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button>20 SEC</button>
          <button>5 MIN</button>
          <button>20 MIN</button>
        </header>

        <div className="main">
          <CountdownTimer />
        </div>
      </div>
    );
  }
}

export default App;
