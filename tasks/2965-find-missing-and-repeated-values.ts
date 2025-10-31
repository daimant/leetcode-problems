// Accepted
// Runtime 64 ms Beats 95.89% of users with TypeScript
// Memory 56.14 MB Beats 47.94% of users with TypeScript

const findMissingAndRepeatedValues = (grid: number[][]): number[] => {
  const arr = grid.flat()
  const set = new Set()
  let repeated = 0

  for (let i = 0; i < arr.length; i++) {
    if (!repeated && set.has(arr[i])) repeated = arr[i]
    else set.add(arr[i])
  }

  for (let i = 1; i <= arr.length; i++) {
    if (!set.has(i)) return [repeated, i]
  }
}