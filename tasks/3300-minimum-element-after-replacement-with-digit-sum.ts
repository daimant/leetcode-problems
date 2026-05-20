// Accepted 835 / 835 testcases passed Sergey Pomortsev Sergey Pomortsev submitted at Feb 18, 2026 13:34
// Solution Runtime 1 ms Beats 90.63% Analyze Complexity Memory 58.42 MB Beats 34.38%

const minElement = (nums: number[]): number =>
  Math.min(
    ...nums.map(el => el
      .toString()
      .split('')
      .reduce((acc, curr) => acc + +curr, 0)
    )
  )