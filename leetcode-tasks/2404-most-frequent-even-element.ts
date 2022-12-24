// wrong 189 / 219 testcases passed

const mostFrequentEven = (nums: number[]): number => {
  const map: Map<number, number> = new Map()

  nums.forEach(el => {
    map.set(el, map.has(el) ? map.get(el) + 1 : 1)
  })
  let result = Array.from(map)
  const maxRep = Math.max(...result.map(el => el[1]))

  result = result.filter(el => el[0] % 2 === 0 && el[1] === maxRep)

  return result.length === 0 ? -1 : result.sort((a, b) => a[0] - b[0])[0][0]
};
