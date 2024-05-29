// Accepted
// Runtime 55 ms Beats 90.00% of users with TypeScript
// Memory 52.54 MB Beats 32.50% of users with TypeScript

const duplicateNumbersXOR = (nums: number[]): number => {
  const dupl = new Map()
  let result = 0

  nums.forEach(el => {
    dupl.set(el, dupl.has(el) ? 2 : 1)
  })

  Array.from(dupl.entries()).forEach(el => {
    if (el[1] === 2) result ^= el[0]
  })

  return result
}
