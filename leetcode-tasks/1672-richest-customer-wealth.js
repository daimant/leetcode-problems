/**
 * @param {number[][]} accounts
 * @return {number}
 */
const maximumWealth = function(accounts) {
  let result = 0;

  for (let i of accounts) {
    const currVal = i.reduce((acc, curr) => acc + curr);
    if (currVal > result) result = currVal;
  }

  return result;
};
