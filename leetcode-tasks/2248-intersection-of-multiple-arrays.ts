// Runtime 62 ms Beats 97.22% Memory 46.3 MB Beats 33.33%

const intersection = (nums: number[][]): number[] => {
  const numReps = new Map
  let result = []

  nums.flat().forEach(num => {
    numReps.set(num, numReps.has(num) ? numReps.get(num) + 1 : 1)
  })

  for (const num of numReps) {
    if (num[1] === nums.length) result.push(num[0])
  }

  return result.sort((a, b) => a - b)
}
