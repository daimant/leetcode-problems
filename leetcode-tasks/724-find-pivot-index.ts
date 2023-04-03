// Runtime 72 ms Beats 89.56% Memory 44.6 MB Beats 95.19%

const pivotIndex = (nums: number[]): number => {
  const sum = nums.reduce((acc, curr) => acc + curr, 0)
  let leftSum = 0
  let result = -1

  for (let i = 0; i < nums.length; i++) {
    const rightSum = sum - leftSum - nums[i]
    if (leftSum === rightSum) return i
    leftSum += nums[i]
  }

  return result
}
