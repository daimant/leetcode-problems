// Wrong Answer 658 / 715 testcases passed

const isPossibleToSplit = (nums: number[]): boolean => {
  nums.sort()

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      if (nums[i] !== nums[i + 2]) i++
      else return false
    } else return true
  }

  return false
}

// Wrong Answer 668 / 715 testcases passed

const isPossibleToSplit2 = (nums: number[]): boolean => {
  if (nums.length === 2 && nums[0] === nums[1]) return true
  nums.sort()

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      if (nums[i] !== nums[i + 2]) i++
      else break
    } else return true
  }

  return false
}

// Accepted
// Runtime 56 ms Beats 100.00% of users with TypeScript
// Memory 52.04 MB Beats 77.36% of users with TypeScript

const isPossibleToSplit3 = (nums: number[]): boolean => {
  const numsA = new Set()
  const numsB = new Set()

  nums.sort()

  for (let i = 0; i < nums.length - 1; i += 2) {
    numsA.add(nums[i])
    numsB.add(nums[i + 1])
  }

  return numsA.size === nums.length / 2 && numsB.size === nums.length / 2
}