/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
const slowestKey = (releaseTimes, keysPressed) => {
  let max = releaseTimes[0];
  let result = keysPressed[0];

  for (let i = 1; i < releaseTimes.length; i++) {
    const currTime = releaseTimes[i] - releaseTimes[i - 1];

    if (max < currTime) {
      max = currTime;
      result = keysPressed[i];
    } else if (max === currTime && keysPressed[i] > result)
      result = keysPressed[i];
  }

  return result;
};
