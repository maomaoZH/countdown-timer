import React, { Component } from "react";
import ResetTimer from "./resetTimer";
import formatTime from "./helper/formatTime";

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
    const hoursLeft = Math.floor(minutesLeft / 60);
    const remainSecondsLeft = seconds % 60;
    this.setState({
      displayTimeLeft: formatTime(hoursLeft, minutesLeft, remainSecondsLeft)
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

  resetTimer = () => {
    clearInterval(countdown);
    this.setState({
      displayTimeLeft: ""
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.seconds !== this.props.seconds) {
      this.renderTimer(this.props.seconds);
    }
  }

  render() {
    const { displayTimeLeft, displayEndTime } = this.state;
    const { timerWrapperClass, timerClass, isDisplayEndTime } = this.props;
    return (
      <React.Fragment>
        <div className={timerWrapperClass}>
          <div className={timerClass}>{displayTimeLeft || "00:00:00"}</div>
        </div>
        <ResetTimer handleClick={this.resetTimer} />
        {displayTimeLeft &&
          isDisplayEndTime && (
            <div>
              Be back at
              {displayEndTime}
            </div>
          )}
      </React.Fragment>
    );
  }
}

export default CountdownTimer;
