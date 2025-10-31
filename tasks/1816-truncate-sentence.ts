// Runtime 68 ms Beats 88.24% Memory 43.4 MB Beats 55.29%

const truncateSentence = (s: string, k: number): string => s.split(' ').map((el, i) => i < k ? el : '').join(' ').trim()

// Runtime 61 ms Beats 92.94% Memory 43.6 MB Beats 52.94%

const truncateSentence2 = (s: string, k: number): string => {
  const arr = s.split(' ')
  arr.length = k

  return arr.join(' ')
}

// Runtime 66 ms Beats 89.41% Memory 42.9 MB Beats 90.59%

const truncateSentence3 = (s: string, k: number): string => {
  let spaceCount = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === ' ') spaceCount++
    if (spaceCount === k) return s.slice(0, i)
  }

  return s
}
