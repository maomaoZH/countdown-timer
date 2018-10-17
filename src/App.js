import React, { Component } from "react";
import "./App.css";
import CountdownTimer from "./countdownTimer";

class App extends Component {
  data = [
    { label: "20 SEC", seconds: 20 },
    { label: "5 MIN", seconds: 300 },
    { label: "20 Min", seconds: 1200 }
  ];

  state = {
    currentCountdownTime: null
  };

  input = React.createRef();

  setCurentCountdownTime = seconds => {
    this.setState({ currentCountdownTime: parseInt(seconds) });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.setCurentCountdownTime(this.input.current.value);
    this.input.current.value = "";
  };

  render() {
    return (
      <div className="app">
        <div className="buttonGroup">
          {this.data.map((d, index) => (
            <button
              className="button"
              key={index}
              onClick={() => this.setCurentCountdownTime(d.seconds)}
            >
              {d.label}
            </button>
          ))}
          <form onSubmit={this.handleSubmit}>
            <input
              className="input"
              type="text"
              ref={this.input}
              placeholder="set custom seconds"
            />
          </form>
        </div>
        <div>
          <CountdownTimer
            timerWrapperClass="timerWrapper"
            timerClass="timer"
            seconds={this.state.currentCountdownTime}
            isDisplayEndTime={true}
          />
        </div>
      </div>
    );
  }
}

export default App;
