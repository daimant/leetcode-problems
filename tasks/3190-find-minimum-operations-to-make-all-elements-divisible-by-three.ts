// Accepted 660 / 660 testcases passed Sergey Pomortsev submitted at Jan 28, 2026 20:34  Editorial
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 57.42 MB Beats 52.90%

const minimumOperations = (nums: number[]): number => nums.filter(el => el % 3).length