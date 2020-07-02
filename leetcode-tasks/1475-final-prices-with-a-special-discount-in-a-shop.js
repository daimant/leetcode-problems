/**
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = function(prices) {
  for (let i = 0; i < prices.length; i++) {
    let curr = prices[i];

    for (let j = i + 1; j < prices.length; j++) {
      if (curr >= prices[j]) {
        curr -= prices[j];
        break;
      }
    }
    prices[i] = curr;
  }
  return prices;
};

const finalPrices2 = function(prices) {
  outer: for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] >= prices[j]) {
        prices[i] -= prices[j];
        continue outer;
      }
    }
  }

  return prices;
};
