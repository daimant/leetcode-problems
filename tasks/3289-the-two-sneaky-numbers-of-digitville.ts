 // Accepted 707 / 707 testcases passed Sergey Pomortsev submitted at Jan 29, 2026 22:37 Editorial
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 57.46 MB Beats 81.08%

function getSneakyNumbers(nums: number[]): number[] {
  const unique = new Set()
  const result = []

  nums.forEach(el => {
    if (unique.has(el)) result.push(el)
    else unique.add(el)
  })

  return result
};