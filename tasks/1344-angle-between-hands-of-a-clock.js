"use strict";

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
  const minutesD = minutes * 6;
  let hourD;
  if (hour === 12) {
    hourD = minutes / 2;
  } else hourD = hour * 5 * 6 + minutes / 2;

  return Math.abs(hourD - minutesD) <= 180
    ? Math.abs(hourD - minutesD)
    : 360 - Math.abs(hourD - minutesD);
};
