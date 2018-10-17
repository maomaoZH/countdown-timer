export default (hoursLeft, minutesLeft, remainSecondsLeft) => {
  const hours = `${hoursLeft < 10 ? "0" : ""}${hoursLeft}`;
  const minutes = `${minutesLeft < 10 ? "0" : ""}${minutesLeft}`;
  const seconds = `${remainSecondsLeft < 10 ? "0" : ""}${remainSecondsLeft}`;
  return `${hours}: ${minutes}: ${seconds}`;
};
