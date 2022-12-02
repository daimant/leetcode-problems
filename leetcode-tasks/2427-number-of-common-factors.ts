// Runtime: 69 ms, faster than 98.63% of TypeScript online submissions for Number of Common Factors.
// Memory Usage: 43.1 MB, less than 57.53% of TypeScript online submissions for Number of Common Factors.

const commonFactors = (a: number, b: number): number => {
  let count = 0
  const min = Math.min(a, b)

  for (let i = 1; i <= min; i++) {
    if (!(a % i) && !(b % i)) count++
  }

  return count
};

const commonFactors2 = (a: number, b: number): number => {
  let count = 1
  const min = a > b ? b : a

  for (let i = 2; i <= min; i++) {
    if (!(a % i) && !(b % i)) count++
  }

  return count
};
