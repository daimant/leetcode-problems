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
