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

// 104 / 266 testcases passed

const firstPalindrome2 = (words: string[]): string => {
  for (let i = 0; i < words.length; i++) {
    if (words[i].length === 1 || words[i].slice(0, words[i].length / 2) === words[i].slice(words[i].length / 2 + 1).split('').reverse().join('')) return words[i]
  }

  return ''
}

// 259 / 266 testcases passed

const firstPalindrome3 = (words: string[]): string => {
  let result = ''

  words.forEach(word => {
    if ((word.length === 1 || (word.length === 2 && word[0] === word[1]) || word.slice(0, word.length / 2) === word.slice((word.length / 2) % 2 ? word.length / 2 + 1 : word.length / 2).split('').reverse().join('')) && !result.length) result = word
  })

  return result
}


// Runtime 71 ms Beats 97.62% Memory 48.8 MB Beats 45.24%
