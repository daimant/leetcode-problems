// Runtime 68 ms Beats 88.24% Memory 43.4 MB Beats 55.29%

const truncateSentence = (s: string, k: number): string => s.split(' ').map((el, i) => i < k ? el : '').join(' ').trim()

// Runtime 61 ms Beats 92.94% Memory 43.6 MB Beats 52.94%

const truncateSentence2 = (s: string, k: number): string => {
  const arr = s.split(' ')
  arr.length = k

  return arr.join(' ')
}
