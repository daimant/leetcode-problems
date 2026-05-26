// Accepted 964 / 964 testcases passed Sergey Pomortsev submitted at May 26, 2026 21:45
// Solution Runtime 4 ms Beats 62.50% Memory 58.54 MB Beats 50.00%

function earliestFinishTime(lStart: number[], lDur: number[], wStart: number[], wDur: number[]): number {
  let minTime = Infinity;

  for (let i = 0; i < lStart.length; i++) {
    for (let j = 0; j < wStart.length; j++) {
      const firstRide = lStart[i] + lDur[i];
      const curr = firstRide < wStart[j] ? wStart[j] + wDur[j] : firstRide + wDur[j];
      if (minTime > curr) minTime = curr;
    }
  }

  for (let j = 0; j < wStart.length; j++) {
    for (let i = 0; i < lStart.length; i++) {
      const firstRide = wStart[j] + wDur[j];
      const curr = firstRide < lStart[i] ? lStart[i] + lDur[i] : firstRide + lDur[i];
      if (minTime > curr) minTime = curr;
    }
  }

  return minTime;
};