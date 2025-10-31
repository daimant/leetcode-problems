/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = logs => {
  let level = 0;

  for (let opr of logs) {
    if (opr.indexOf("../") !== -1 && !level) continue;

    level += opr.indexOf("../") !== -1 ? -1 : opr.indexOf("./") !== -1 ? 0 : 1;
  }

  return level;
};
