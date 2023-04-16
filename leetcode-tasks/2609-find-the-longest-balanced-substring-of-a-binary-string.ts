// Runtime 95 ms Beats 68.18% Memory 46.8 MB Beats 29.55%

const findTheLongestBalancedSubstring = (s: string): number => {
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
