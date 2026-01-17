// Accepted 913 / 913 testcases passed Sergey Pomortsev submitted at Oct 24, 2025 14:21
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.93 MB Beats 68.15%

const earliestTime = (tasks: number[][]): number => Math.min(...tasks.map(el => el[0] + el[1]))