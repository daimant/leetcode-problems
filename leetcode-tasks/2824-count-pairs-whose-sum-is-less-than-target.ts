// Accepted
// Solution Runtime 58 ms Beats 88.74%
// Memory 51.94 MB Beats 42.42%

const countPairs = (nums: number[], target: number): number => {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] < target) count++
    }
  }

  return count
}
