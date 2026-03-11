// Accepted 215 / 215 testcases passed Sergey Pomortsev submitted at Feb 24, 2026 21:27
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 56.73 MB Beats 35.29%

function findGCD(nums: number[]): number {
  let max = nums[0]
  let min = nums[0]
  let result = 1

  nums.forEach(el => {
    if (el > max) max = el
    if (el < min) min = el
  })

  for (let i = 2; i <= min; i++) {
    if (max % i === 0 && min % i === 0) result = i
  }

  return result
};