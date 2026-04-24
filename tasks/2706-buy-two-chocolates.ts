// Accepted 2003 / 2003 testcases passed Sergey Pomortsev submitted at Mar 26, 2026 18:45
// Solution Runtime 0 ms Beats 100.00%  Memory 57.95 MB Beats 93.94%

function buyChoco(prices: number[], money: number): number {
  let min1 = Infinity;
  let min2 = Infinity;

  for (let i = 0; i < prices.length; i++) {
    if (min1 >= prices[i]) {
      min2 = min1;
      min1 = prices[i];
    } else if (min1 < prices[i] && min2 > prices[i]) min2 = prices[i];
  }

  return min1 + min2 <= money ? money - (min1 + min2) : money;
};