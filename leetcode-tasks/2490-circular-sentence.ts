// wrong 260 / 266 testcases passed

const isCircularSentence = (s: string): boolean => {
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === ' ' && s[i - 1] !== s[i + 1]) return false
  }

  return true
}

// Runtime 76 ms Beats 84.78% Memory 44.3 MB Beats 84.78%

const isCircularSentence2 = (s: string): boolean => {
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === ' ' && s[i - 1] !== s[i + 1]) return false
  }

  return s[0] === s[s.length - 1]
}
