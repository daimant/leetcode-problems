// Accepted 596 / 596 testcases passed Sergey Pomortsev submitted at Oct 23, 2025 17:15
// Solution Runtime 3 ms Beats 99.28% Analyze Complexity Memory 60.28 MB Beats 67.39%

const maxKDistinct = (nums: number[], k: number): number[] => Array.from(new Set(nums)).sort((a, b) => b - a).slice(0, k)