// Runtime: 90 ms, faster than 72.13% of TypeScript online submissions for Apply Operations to an Array.
// Memory Usage: 44.3 MB, less than 98.36% of TypeScript online submissions for Apply Operations to an Array.

const applyOperations = (nums: number[]): number[] => {
  const startLength = nums.length

  nums = nums.map((el, i, arr) => {
    if (el === arr[i + 1]) {
      el += arr[i + 1]
      arr[i + 1] = 0
    }
    return el
  }).filter(el => el)

  return nums.concat(new Array(startLength - nums.length).fill(0))
}

// Runtime: 63 ms, faster than 100.00% of TypeScript online submissions for Apply Operations to an Array.
// Memory Usage: 44.4 MB, less than 98.36% of TypeScript online submissions for Apply Operations to an Array.

const applyOperations2 = (nums: number[]): number[] => {
  const startLength = nums.length

  nums = nums.map((el, i, arr) => {
    if (el === arr[i + 1]) {
      el += arr[i + 1]
      arr.splice(i + 1, 1)
    }
    return el
  }).filter(el => el)

  return nums.concat(new Array(startLength - nums.length).fill(0))
}
