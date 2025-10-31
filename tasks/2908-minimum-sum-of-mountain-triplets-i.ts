// Accepted
// Runtime 57 ms Beats 72.73% of users with TypeScript
// Memory 51.78 MB Beats 100.00% of users with TypeScript

const minimumSum3 = (nums: number[]): number => {
  let result = Infinity

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] < nums[j] && nums[j] > nums[k] && nums[i] + nums[j] + nums[k] < result) {
          result = nums[i] + nums[j] + nums[k]
        }
      }
    }
  }

  return result === Infinity ? -1 : result
};