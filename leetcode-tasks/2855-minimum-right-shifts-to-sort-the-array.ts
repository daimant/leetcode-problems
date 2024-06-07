// Accepted
// Runtime 67 ms Beats 59.09% of users with TypeScript
// Memory 52.77 MB Beats 13.64% of users with TypeScript

const minimumRightShifts = (nums: number[]): number => {
  let newArr = []
  let index = 0

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      newArr = [...nums.slice(i + 1), ...nums.slice(0, i + 1)]
      index = i
    }
  }

  if (!newArr.length) return 0

  for (let i = 0; i < newArr.length - 1; i++) {
    if (newArr[i] > newArr[i + 1]) return -1
  }

  return nums.length - index - 1
}

// optimized
// Accepted
// Runtime 50 ms Beats 100.00% of users with TypeScript
// Memory 52.46 MB Beats 18.18% of users with TypeScript

const minimumRightShifts2 = (nums: number[]): number => {
  let goalArr = []
  let goalIndex = 0

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) {
      if (goalArr.length) return -1
      goalIndex = i + 1
      goalArr = [...nums.slice(goalIndex), ...nums.slice(0, goalIndex)]
    }
  }

  if (!goalArr.length) return 0

  for (let i = 0; i < goalArr.length - 1; i++) {
    if (goalArr[i] > goalArr[i + 1]) return -1
  }

  return goalArr.length - goalIndex
}
