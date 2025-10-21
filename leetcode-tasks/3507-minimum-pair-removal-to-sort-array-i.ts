// wrong 162 / 806 testcases passed
const minimumPairRemoval = (nums: number[]): number => {
  let countRemoval = 0

  while (!checkSortedArr(nums)) {
    const smallestIndex = findSmallestIndex(nums)

    if (smallestIndex === nums.length - 1) nums[smallestIndex - 1] += nums.pop()
    else {
      nums[smallestIndex] += nums[smallestIndex + 1]
      nums.splice(smallestIndex + 1, 1)
    }
    countRemoval++
  }

  return countRemoval
};

const checkSortedArr = (nums: number[]): boolean => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] > nums[i + 1]) return false
  }

  return true
}

const findSmallestIndex = (nums: number[]) => {
  let smallestIndex = 0

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[smallestIndex]) smallestIndex = i
  }

  return smallestIndex
}

// Accepted 806 / 806 testcases passed
// Solution Runtime 2 ms Beats 52.38% Memory 58.46 MB Beats 38.10%

const minimumPairRemoval2 = (nums: number[]): number => {
  let countRemoval = 0

  while(!checkSortedArr(nums)) {
    const smallestIndex = findSmallestPairStartIndex(nums)

    nums[smallestIndex] += nums[smallestIndex + 1]
    nums.splice(smallestIndex + 1, 1)

    countRemoval++
  }

  return countRemoval
};

const findSmallestPairStartIndex = (nums: number[]) => {
  let smallestIndex = 0
  let smallestPairSum = nums[0] + nums[1]

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] + nums[i + 1] < smallestPairSum) {
      smallestIndex = i
      smallestPairSum = nums[i] + nums[i + 1]
    }
  }

  return smallestIndex
}
