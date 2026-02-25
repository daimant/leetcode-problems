// Accepted 116 / 116 testcases passed Sergey Pomortsev submitted at Feb 18, 2026 19:36
// Solution Runtime 104 ms Beats 96.00% Analyze Complexity Memory 66.21 MB Beats 68.00%

function maxCoins(piles: number[]): number {
  let result = 0
  piles.sort((a, b) => a - b)
  const cuttedPiles = piles.slice(piles.length / 3)

  for(let i = 0; i < cuttedPiles.length; i+=2) {
    result += cuttedPiles[i]
  }

  return result
};