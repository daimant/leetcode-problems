// Accepted
// Runtime 56 ms Beats 91.38% of users with TypeScript
// Memory 51.32 MB Beats 100.00% of users with TypeScript

const isSubstringPresent = (s: string): boolean => {
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1] || s[i + 1] === s[i - 1] || s.slice(i + 2).indexOf(`${s[i + 1]}${s[i]}`) !== -1) return true
  }

  return false
}
