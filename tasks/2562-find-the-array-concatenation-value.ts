// Runtime 67 ms Beats 76.58% Memory 44.7 MB Beats 93.69%

const findTheArrayConcVal = (nums: number[]): number => {
  const halfNumsLength = Math.trunc(nums.length / 2)
  let result = 0

  for (let i = 0; i < halfNumsLength; i++) {
    result += +`${nums[i]}${nums[nums.length - i - 1]}`
  }

  return result + (nums.length % 2 ? nums[Math.trunc(nums.length / 2)] : 0)
}
