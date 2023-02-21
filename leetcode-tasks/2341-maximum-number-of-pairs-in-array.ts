// Runtime 60 ms Beats 92% Memory 45.1 MB Beats 32%

const numberOfPairs = (nums: number[]): number[] => {
  const map = new Map()
  const result = [0, 0]

  nums.forEach(el => {
    map.set(el, map.has(el) ? map.get(el) + 1 : 1)
  })

  for (const count of map.values()) {
    result[0] += Math.trunc(count / 2)
    result[1] += count % 2
  }

  return result
}
