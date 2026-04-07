// Accepted 106 / 106 testcases passed Sergey Pomortsev submitted at Feb 15, 2026 12:42
// Solution Runtime 40 ms Beats 85.43% Analyze Complexity Memory 54.35 MB Beats 95.14%

type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
  let result = init

  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i])
  }

  return result
};