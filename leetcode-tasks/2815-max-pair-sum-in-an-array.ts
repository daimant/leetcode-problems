// Wrong Answer
// 2968 / 3008 testcases passed

const maxSum = (nums: number[]): number => {
  const map = new Map()

  nums.forEach(el => {
    const currMax = Math.max(...String(el).split('').map(el => +el))
    let acc = map.get(currMax)

    if (!acc) acc = [el]
    else if (acc.length === 1) {
      if (acc[0] > el) acc.push(el)
      else acc.unshift(el)
    } else {
      if (el > acc[0]) {
        acc[1] = acc[0]
        acc[0] = el
      } else if (el < acc[0] && el > acc[1]) acc[1] = el
    }

    map.set(currMax, acc)
  })

  const arr = Array.from(map.values())
  return Math.max(...arr.map(inArr => inArr.length === 1 ? -1 : inArr[0] + inArr[1]))
}

// Accepted
// Runtime 117 ms Beats 80.95%
// Memory 59.55 MB Beats 42.86%

const maxSum2 = (nums: number[]): number => {
  const map = new Map()

  nums.forEach(el => {
    const currMax = Math.max(...String(el).split('').map(el => +el))
    let acc = map.get(currMax)

    if (!acc) acc = [el]
    else if (acc.length === 1) {
      if (acc[0] > el) acc.push(el)
      else acc.unshift(el)
    } else {
      if (el > acc[0]) {
        acc[1] = acc[0]
        acc[0] = el
      } else if (el <= acc[0] && el > acc[1]) acc[1] = el
    }

    map.set(currMax, acc)
  })

  const arr = Array.from(map.values())
  return Math.max(...arr.map(inArr => inArr.length === 1 ? -1 : inArr[0] + inArr[1]))
}
