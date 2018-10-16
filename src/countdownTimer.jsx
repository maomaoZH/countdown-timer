import React, { Component } from "react";

let countdown;

class CountdownTimer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayTimeLeft: "",
      displayEndTime: ""
    };
  }

  displayEndTime(timestamp) {
    const time = new Date(timestamp);
    const getHour = time.getHours();
    const getMinutes = time.getMinutes();
    this.setState({
      displayEndTime: `${getHour}: ${getMinutes < 10 ? "0" : ""}${getMinutes}`
    });
  }

  displayTimeLeft(seconds) {
    const minutesLeft = Math.floor(seconds / 60);
    const remainSecondsLeft = seconds % 60;
    this.setState({
      displayTimeLeft: `${minutesLeft}: ${
        remainSecondsLeft < 10 ? "0" : ""
      }${remainSecondsLeft}`
    });
  }

  renderTimer(seconds) {
    clearInterval(countdown);
    const now = Date.now();
    const then = now + seconds * 1000;
    this.displayTimeLeft(seconds);
    this.displayEndTime(then);

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }
      this.displayTimeLeft(secondsLeft);
    }, 1000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.seconds !== this.props.seconds) {
      this.renderTimer(this.props.seconds);
    }
  }

  render() {
    const { displayTimeLeft, displayEndTime } = this.state;
    return (
      <div>
        <div>{displayTimeLeft || "00:00"}</div>
        {displayTimeLeft &&
          this.props.isDisplayEndTime && (
            <div>
              be back at
              {displayEndTime}
            </div>
          )}
      </div>
    );
  }
}

export default CountdownTimer;
