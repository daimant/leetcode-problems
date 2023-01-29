// 40 / 45 testcases passed

const captureForts = (forts: number[]): number => {
  let result = 0
  let count = -1

  if (!forts.includes(1)) return result

  for (let i = 0; i < forts.length; i++) {
    if (forts[i] === 1 || forts[i] === -1) {
      if (count > result) result = count
      count = 0
    } else if (count >= 0 && forts[i] === 0) count++
  }

  return result
}

// Runtime 81 ms Beats 17.39% Memory 42.5 MB Beats 100%

const captureForts2 = (forts: number[]): number => {
  let result = 0
  let start = -1
  let typeStart: number

  if (!forts.includes(1)) return result

  for (let i = 0; i < forts.length; i++) {
    if (forts[i] === -1 || forts[i] === 1) {
      if (start >= 0 && i - start - 1 > result && ((typeStart === -1 && forts[i] === 1) || (typeStart === 1 && forts[i] === -1))) {
        result = i - start - 1
      }

      typeStart = forts[i]
      start = i
    }
  }

  return result
}

// Runtime 55 ms Beats 100% Memory 42.9 MB Beats 86.96%

const captureForts3 = (forts: number[]): number => {
  let result = 0
  let count = -1

  for (let i = 0; i < forts.length; i++) {
    if (forts[i] === 1 || forts[i] === -1) {
      if (count > result && ((forts[i] === 1 && forts[i - count - 1] === -1) || (forts[i] === -1 && forts[i - count - 1] === 1))) result = count
      count = 0
    } else if (count >= 0 && forts[i] === 0) count++
  }

  return result
}
