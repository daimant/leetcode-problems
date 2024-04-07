// wrong solution 1683 / 1935 testcases passed

const findMinimumOperations = (s1: string, s2: string, s3: string): number => {
  let stopMatch = -1

  for (let i = 0; i < s1.length && stopMatch === -1; i++) {
    if (s1[i] !== s2[i] || s2[i] !== s3[i] || s3[i] !== s1[i]) stopMatch = i
    else if (i === s1.length - 1) return 0
  }

  return stopMatch === 0 ? -1 : s1.slice(stopMatch).length + s2.slice(stopMatch).length + s3.slice(stopMatch).length
}