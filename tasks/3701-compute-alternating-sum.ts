// Accepted 994 / 994 testcases passed Sergey Pomortsev submitted at Oct 23, 2025 00:02
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.00 MB Beats 46.36%

const alternatingSum = (nums: number[]): number => nums.reduce((acc, curr, i) => i % 2 ? acc - curr : acc + curr, 0)