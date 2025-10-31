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
}

// Runtime 98 ms Beats 96.15% Memory 50.8 MB Beats 73.8%

const mostFrequentEven2 = (nums: number[]): number => {
  const map: Map<number, number> = new Map()

  nums.forEach(el => {
    map.set(el, map.has(el) ? map.get(el) + 1 : 1)
  })

  let result = Array.from(map).filter(el => el[0] % 2 === 0)
  const maxRep = Math.max(...result.map(el => el[1]))

  return result.length === 0 ? -1 : result.filter(el => el[1] === maxRep).sort((a, b) => a[0] - b[0])[0][0]
}

// Runtime 85 ms Beats 100% Memory 50.7 MB Beats 73.8%

const mostFrequentEven3 = (nums: number[]): number => {
  const map: Map<number, number> = new Map()

  nums.forEach(el => {
    if (el % 2 === 0) map.set(el, map.has(el) ? map.get(el) + 1 : 1)
  })

  if (!map.size) return -1

  let result = Array.from(map)
  const maxRep = Math.max(...result.map(el => el[1]))

  return result.filter(el => el[1] === maxRep).sort((a, b) => a[0] - b[0])[0][0]
}
