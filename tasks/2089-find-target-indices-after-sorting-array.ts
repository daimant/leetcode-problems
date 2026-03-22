// Accepted 216 / 216 testcases passed Sergey Pomortsev submitted at Feb 25, 2026 18:19
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 57.94 MB Beats 31.25%

const targetIndices = (nums: number[], target: number): number[] => {
  return nums.sort((a, b) => a - b).reduce((acc, curr, i) => curr === target ? acc.concat(i) : acc, [])
}