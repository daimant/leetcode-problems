// Accepted 147 / 147 testcases passed Sergey Pomortsev submitted at Feb 03, 2026 19:12
// Solution Runtime 6 ms Beats 100.00% Analyze Complexity Memory 63.60 MB Beats 76.60%


function numberOfBeams(bank: string[]): number {
  let result = 0
  const rowsLasers = []

  for (let i = 0; i < bank.length; i++) {
    let currLasers = 0
    for (let j = 0; j < bank[i].length; j++) {
      if (bank[i][j] === '1') currLasers++
    }

    const prevLasers = rowsLasers[rowsLasers.length - 1]
    if (prevLasers) {
      result += currLasers * prevLasers
    }

    if (currLasers) {
      rowsLasers.push(currLasers)
    }
  }

  return result
};