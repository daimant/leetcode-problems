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