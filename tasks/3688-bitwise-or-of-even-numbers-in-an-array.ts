// Accepted 695 / 695 testcases passed Sergey Pomortsev submitted at Oct 23, 2025 16:39
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.04 MB Beats 27.70%

const evenNumberBitwiseORs = (nums: number[]): number => nums.filter(el => el % 2 === 0).reduce((acc, curr) => acc | curr, 0)