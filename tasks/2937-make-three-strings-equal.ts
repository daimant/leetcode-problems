// wrong solution 1683 / 1935 testcases passed

const findMinimumOperations = (s1: string, s2: string, s3: string): number => {
  let stopMatch = -1

  for (let i = 0; i < s1.length && stopMatch === -1; i++) {
    if (s1[i] !== s2[i] || s2[i] !== s3[i] || s3[i] !== s1[i]) stopMatch = i
    else if (i === s1.length - 1) return 0
  }

  return stopMatch === 0 ? -1 : s1.slice(stopMatch).length + s2.slice(stopMatch).length + s3.slice(stopMatch).length
}

// Accepted
// Runtime 93 ms Beats 85.37% of users with TypeScript
// Memory 54.99 MB Beats 56.10% of users with TypeScript

const findMinimumOperations2 = (s1: string, s2: string, s3: string): number => {
  const maxLen = Math.max(s1.length, s2.length, s3.length)
  let stopMatch = -1

  for (let i = 0; i < maxLen && stopMatch === -1; i++) {
    if (s1[i] !== s2[i] || s2[i] !== s3[i] || s3[i] !== s1[i]) stopMatch = i
    else if (i === maxLen - 1) return 0
  }

  return stopMatch === 0 ? -1 : s1.slice(stopMatch).length + s2.slice(stopMatch).length + s3.slice(stopMatch).length
}

// Accepted
// Runtime 91 ms Beats 90.24% of users with TypeScript
// Memory 55.30 MB Beats 39.02% of users with TypeScript

const findMinimumOperations3 = (s1: string, s2: string, s3: string): number => {
  const maxLen = Math.max(s1.length, s2.length, s3.length)

  for (let i = 0; i < maxLen; i++) {
    if (s1[i] !== s2[i] || s2[i] !== s3[i] || s3[i] !== s1[i]) {
      return i > 0 ? s1.slice(i).length + s2.slice(i).length + s3.slice(i).length : -1
    }
  }

  return 0
}