// Accepted 855 / 855 testcases passed Sergey Pomortsev submitted at Jan 26, 2026 20:52 Editorial
// Solution Runtime 1 ms Beats 85.14% Analyze Complexity Memory 57.61 MB Beats 88.19%

const minOperations = (nums: number[], k: number): number => nums.reduce((acc, curr) => acc + curr, 0) % k