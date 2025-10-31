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

// Accepted
// Runtime 65 ms Beats 95.56% of users with TypeScript
// Memory 53.25 MB Beats 90.00% of users with TypeScript

const minimumCost2 = (nums: number[]): number => {
  if (nums.length === 3) return nums[0] + nums[1] + nums[2]
  let b = Infinity
  let c = Infinity

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < b) {
      c = b
      b = nums[i]
    } else if (nums[i] < c) c = nums[i]
  }

  return nums[0] + b + c
}