// Accepted 3004 / 3004 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 22:37
// Solution Runtime 2 ms Beats 84.21% Analyze Complexity Memory 61.17 MB Beats 26.32%

const maximizeSum = (nums: number[], k: number): number => Math.max(...nums) * k + new Array(k).fill(0).reduce((acc, _, i) => acc + i, 0)