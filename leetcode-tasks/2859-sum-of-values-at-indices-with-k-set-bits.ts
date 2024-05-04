// Accepted
// Runtime 57 ms Beats 92.96% of users with TypeScript
// Memory 54.41 MB Beats 42.25% of users with TypeScript

const sumIndicesWithKSetBits = (nums: number[], k: number): number => nums.reduce((acc, curr, i) => ( i.toString(2).replace(/0/gi, '').length === k ? curr : 0 ) + acc, 0)