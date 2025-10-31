// Accepted
// Runtime 50 ms Beats 95.89% of users with TypeScript
// Memory 52.75 MB Beats 24.66% of users with TypeScript

const findPeaks = (mountain: number[]): number[] => {
  let result = []

  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) result.push(i)
  }

  return result
}