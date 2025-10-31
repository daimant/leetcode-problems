/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
const numWaterBottles = (numBottles, numExchange) => {
  let empty = 0;
  let result = 0;

  while (numBottles || empty >= numExchange) {
    result += numBottles;
    empty += numBottles;
    numBottles = Math.trunc(empty / numExchange);
    empty = empty % numExchange;
  }

  return result;
};
