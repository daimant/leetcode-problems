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
