// Accepted
// Runtime 42 ms Beats 100.00% of users with TypeScript
// Memory 51.75 MB Beats 84.80% of users with TypeScript

const returnToBoundaryCount = (nums: number[]): number => nums.reduce((acc, curr) => [acc[0] + curr, acc[0] + curr === 0 ? ++acc[1] : acc[1]], [0, 0])[1]