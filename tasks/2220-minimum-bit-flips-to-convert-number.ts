// Accepted 250 / 250 testcases passed Sergey Pomortsev submitted at Feb 03, 2026 13:31
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 53.68 MB Beats 100.00%

function minBitFlips(start: number, goal: number): number {
  let startBin = start.toString(2)
  let goalBin = goal.toString(2)
  const maxLen = Math.max(startBin.length, goalBin.length)
  let count = 0

  startBin = startBin.padStart(maxLen, '0')
  goalBin = goalBin.padStart(maxLen, '0')

  for (let i = 0; i < maxLen; i++) {
    if (startBin[i] !== goalBin[i]) count++
  }

  return count
};