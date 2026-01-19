// Accepted 913 / 913 testcases passed Sergey Pomortsev submitted at Oct 24, 2025 14:21
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.93 MB Beats 68.15%

const earliestTime = (tasks: number[][]): number => Math.min(...tasks.map(el => el[0] + el[1]))

// Other solution
// Accepted 913 / 913 testcases passed Sergey Pomortsev submitted at Oct 24, 2025 14:39
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.35 MB Beats 86.62%

const earliestTime2 = (tasks: number[][]): number => {
  let result = Infinity

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i][0] + tasks[i][1] < result) result = tasks[i][0] + tasks[i][1]
  }

  return result
}