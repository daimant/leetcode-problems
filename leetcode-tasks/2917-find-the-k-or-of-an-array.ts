// wrong 950 / 951 testcases passed

const findKOr = (nums: number[], k: number): number => {
  const result = []
  let maxBinLen = 0

  const bins = nums.map(el => {
    const currBin = []

    while (el) {
      currBin.push(el % 2)
      el = Math.trunc(el / 2)
    }

    if (maxBinLen < currBin.length) maxBinLen = currBin.length

    return currBin
  })

  for (let i = 0; i < maxBinLen; i++) {
    let currBin = bins.map(el => el[i]).filter(el => el).length
    result.push(currBin < k ? 0 : 1)
  }

  return Number.parseInt(result.reverse().join(''), 2)
}

// Accepted
// Runtime 104 ms Beats 6.67% of users with TypeScript
// Memory 58.72 MB Beats 6.67% of users with TypeScript

const findKOr2 = (nums: number[], k: number): number => {
  const result = []
  let maxBinLen = 0

  const bins = nums.map(el => {
    const currBin = []

    while (el) {
      currBin.push(el % 2)
      el = Math.trunc(el / 2)
    }

    if (maxBinLen < currBin.length) maxBinLen = currBin.length

    return currBin
  })

  for (let i = 0; i < maxBinLen; i++) {
    let currBin = bins.map(el => el[i]).filter(el => el).length
    result.push(currBin < k ? 0 : 1)
  }

  return result.length ? Number.parseInt(result.reverse().join(''), 2) : 0
}
