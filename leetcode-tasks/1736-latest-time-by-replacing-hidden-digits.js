/**
 * @param {string} time
 * @return {string}
 */
const maximumTime = function(time) {
  time = time.split("");

  if (time[0] === "?" && time[1] === "?") {
    time[0] = "2";
    time[1] = "3";
  }
  if (time[3] === "?") time[3] = "5";
  if (time[4] === "?") time[4] = "9";

  for (let i = 2; time[0] === "?" && i >= 0; i--) {
    if (i + time[1] <= 23) time[0] = i;
  }

  for (let i = 9; time[1] === "?" && i >= 0; i--) {
    if (time[0] + i <= 23) time[1] = i;
  }

  return time.join("");
};
