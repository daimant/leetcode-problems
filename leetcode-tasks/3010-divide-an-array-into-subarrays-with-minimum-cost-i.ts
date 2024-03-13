// wrong solution

const minimumCost = (nums: number[]): number => {
  let a = nums[0]
  let b = nums[1]
  let c = nums[2]

  if (nums.length > 3) {
    for (let i = 3; i < nums.length; i++) {
      if (nums[i] < a) {
        c = b
        b = a
        a = nums[i]
      } else if (nums[i] < b) {
        c = b
        b = nums[i]
      } else if (nums[i] < c) c = nums[i]
    }
  }

  return a + b + c
}