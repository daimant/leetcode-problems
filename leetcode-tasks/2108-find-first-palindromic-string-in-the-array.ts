// 262 / 266 testcases passed

const firstPalindrome = (words: string[]): string => {
  for (let w = 0; w < words.length; w++) {
    for (let i = 0; i < words[w].length / 2; i++) {
      if (words[w][i] !== words[w][words[w].length - i - 1]) break
      if (i === Math.trunc(words[w].length / 2) - 1) return words[w]
    }
  }

  return ''
}
