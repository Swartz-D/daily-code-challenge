function humanReadable(seconds) {
  console.log("start: ", seconds);
  let hours = 0;
  let hour = 3600;
  let minutes = 0;
  let minute = 60;
  if (seconds >= hour) {
    hours = Math.floor(seconds / hour);
    seconds = seconds - hours * hour;
  }
  if (seconds >= minute) {
    minutes = Math.floor(seconds / minute);
    seconds = seconds - minutes * minute;
  }
  hours = `${hours}`;
  minutes = `${minutes}`;
  hours.length === 2 ? (hours = `${hours}`) : (hours = "0" + `${hours}`);
  minutes.length === 2
    ? (minutes = `${minutes}`)
    : (minutes = "0" + `${minutes}`);
  seconds = `${seconds}`;
  seconds.length === 2
    ? (seconds = `${seconds}`)
    : (seconds = "0" + `${seconds}`);
  const time = `${hours}:${minutes}:${seconds}`;
  return time;
}
module.exports = humanReadable;
