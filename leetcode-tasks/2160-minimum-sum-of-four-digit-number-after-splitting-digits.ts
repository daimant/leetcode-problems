const minimumSum = (num: number): number => {
  const arr = String(num).split('').sort()
  return Number(arr[0] + arr[2]) + Number(arr[1] + arr[3])
}

const minimumSum2 = (num: number): number => String(num).split('').sort().reduce((acc, curr, idx) => idx < 2 ? acc += Number(curr) * 10 : acc += Number(curr), 0)

// both solution with same time, 0,3mb difference
// Runtime: 68 ms, faster than 88.52% of TypeScript online submissions for Minimum Sum of Four Digit Number After Splitting Digits.
// Memory Usage: 43.7 MB, less than 32.79% of TypeScript online submissions for Minimum Sum of Four Digit Number After Splitting Digits.
