// Accepted 804 / 804 testcases passed Sergey Pomortsev submitted at Jan 30, 2026 13:20
// Solution Runtime 1 ms Beats 92.00% Analyze Complexity Memory 58.42 MB Beats 53.00%

const transformArray = (nums: number[]): number[] => nums.map(el => el % 2).sort()

// optimized solution
// Accepted 804 / 804 testcases passed Sergey Pomortsev submitted at Jan 30, 2026 13:23
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.59 MB Beats 47.00%

const transformArray = (nums: number[]): number[] => {
  let odd = 0

  nums.forEach(el => {
    if (el % 2) odd++
  })

  return new Array(nums.length - odd).fill(0).concat(new Array(odd).fill(1))
}