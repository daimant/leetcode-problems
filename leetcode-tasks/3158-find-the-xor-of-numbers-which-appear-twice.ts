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

// optimized
// Accepted
// Runtime 57 ms Beats 85.00% of users with TypeScript
// Memory 51.79 MB Beats 90.00% of users with TypeScript

const duplicateNumbersXOR2 = (nums: number[]): number => {
  const dupl = new Set()
  let result = 0

  nums.forEach(el => {
    if (dupl.has(el)) result ^= el
    else dupl.add(el)
  })

  return result
}
