// Runtime: 80 ms, faster than 100.00% of TypeScript online submissions for The Employee That Worked on the Longest Task.
// Memory Usage: 47.5 MB, less than 83.33% of TypeScript online submissions for The Employee That Worked on the Longest Task.

const hardestWorker = (n: number, logs: number[][]): number => {
  let maxTaskTime = 0
  let worker = null
  let prevTime = null

  logs.forEach(log => {
    if (!prevTime || maxTaskTime < log[1] - prevTime) {
      worker = log[0]
      maxTaskTime = log[1] - prevTime
    } else if (maxTaskTime === log[1] - prevTime && worker > log[0]) worker = log[0]

    prevTime = log[1]
  })

  return worker
};
