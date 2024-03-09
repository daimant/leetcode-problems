// Accepted
// Runtime 49 ms Beats 96.72% of users with TypeScript
// Memory 51.92 MB Beats 60.66% of users with TypeScript
const minOperations1 = (nums: number[], k: number): number => nums.reduce((acc, curr) => curr < k ? ++acc : acc, 0)