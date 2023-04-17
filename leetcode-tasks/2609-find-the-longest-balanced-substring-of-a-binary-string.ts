// 1091 / 1848 testcases passed

const findTheLongestBalancedSubstring = (s: string): number => {
  const seqs = []
  let currLen = 0
  let result = 0

  for (let i = 0; i < s.length; i++) {
    currLen++

    if (s[i] !== s[i + 1]) {
      if (seqs[seqs.length - 1] === currLen && currLen > result) result = currLen
      seqs.push(currLen)
      currLen = 0
    }
  }

  return result * 2
}

// Runtime 95 ms Beats 68.18% Memory 46.8 MB Beats 29.55%

const findTheLongestBalancedSubstring2 = (s: string): number => {
  const seqs = []
  let currLen = 0
  let result = 0

  for (let i = 0; i < s.length; i++) {
    currLen++

    if (s[i] !== s[i + 1]) {
      const minSeq = Math.min(seqs[seqs.length - 1], currLen)
      if (minSeq > result && s[i] === '1') result = minSeq
      seqs.push(currLen)
      currLen = 0
    }
  }

  return result * 2
}
