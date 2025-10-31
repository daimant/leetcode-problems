// Runtime: 73 ms, faster than 100.00% of TypeScript online submissions for Minimum Cuts to Divide a Circle.
// Memory Usage: 43.3 MB, less than 100.00% of TypeScript online submissions for Minimum Cuts to Divide a Circle.

const numberOfCuts = (n: number): number => n > 1 && n % 2 ? n : Math.trunc(n / 2)
