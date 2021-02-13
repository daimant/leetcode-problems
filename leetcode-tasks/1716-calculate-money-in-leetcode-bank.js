/**
 * @param {number} n
 * @return {number}
 */
const totalMoney = function(n) {
  let result = 0;

  for (let i = 1; n; i++) {
    for (let j = i; n && j < i + 7; j++) {
      result += j;
      n--;
    }
  }

  return result;
};
