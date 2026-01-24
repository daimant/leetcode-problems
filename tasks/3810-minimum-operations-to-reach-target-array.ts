// Accepted 1014 / 1014 testcases passed Sergey Pomortsev submitted at Jan 23, 2026 16:50
// Solution Runtime 27 ms Beats 33.33% Analyze Complexity Memory 83.69 MB Beats 89.74%

function minOperations6(nums: number[], target: number[]): number {
  const unique = new Set()
  let count = 0

  nums.forEach((el, i) => {
    if (!unique.has(el) && el !== target[i]) {
      count++
      unique.add(el)
    }
  })

  return count
};