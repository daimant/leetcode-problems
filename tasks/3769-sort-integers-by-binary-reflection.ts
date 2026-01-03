// Accepted 963 / 963 testcases passed Sergey Pomortsev submitted at Dec 20, 2025 13:41
// Solution Runtime 19 ms Beats 66.23% Analyze Complexity Memory 63.12 MB Beats 48.05%

function sortByReflection(nums: number[]): number[] {
  const binary: Map<number, number> = new Map()

  nums.forEach(el => {
    if (!binary.has(el)) binary.set(el, Number(el.toString(2).split('').reverse().join('')))
  })

  return nums.sort((a, b) => (binary.get(a) === binary.get(b) ? a < b : binary.get(a) < binary.get(b)) ? -1 : 1)
};