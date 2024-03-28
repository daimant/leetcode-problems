// wrong solution

const maximumLengthSubstring = (s: string): number => {
  let result = 0

  for (let i = 0; i < s.length - 1; i++) {
    const rep = new Map()

    for (let j = i; j < s.length; j++) {
      if (rep.get(s[j]) > 2) {
        if (result < j - i - 1) result = j - i - 1
        break
      } else {
        rep.set(s[j], (rep.get(s[j]) || 0) + 1)
        if (result < j - i - 1) result = j - i - 1
      }
    }
  }

  return result
}
