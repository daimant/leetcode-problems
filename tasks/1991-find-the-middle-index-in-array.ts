// Runtime 44 ms Beats 100% Memory 44.4 MB Beats 70.27%

const findMiddleIndex = (nums: number[]): number => {
  const sum = nums.reduce((acc, curr) => acc + curr, 0)
  let leftSum = 0
  let result = -1

  nums.forEach((el, i) => {
    if (result >= 0) return
    if (leftSum === sum - leftSum - nums[i]) return result = i
    leftSum += nums[i]
  })

  return result
}
