// wrong 260 / 266 testcases passed

const isCircularSentence = (s: string): boolean => {
  for (let i = 1; i < s.length - 1; i++) {
    if (s[i] === ' ' && s[i - 1] !== s[i + 1]) return false
  }

  return true
}
