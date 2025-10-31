// Accepted
// Runtime 56 ms Beats 91.38% of users with TypeScript
// Memory 51.32 MB Beats 100.00% of users with TypeScript

const isSubstringPresent = (s: string): boolean => {
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1] || s[i + 1] === s[i - 1] || s.slice(i + 2).indexOf(`${s[i + 1]}${s[i]}`) !== -1) return true
  }

  return false
}

// added optimized solution
// Accepted
// Runtime 53 ms Beats 94.83% of users with TypeScript
// Memory 52.69 MB Beats 34.48% of users with TypeScript

const isSubstringPresent2 = (s: string): boolean => {
  const set = new Set()

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1] || s[i + 1] === s[i - 1]) return true
    set.add(`${s[i + 1]}${s[i]}`)
  }

  for (let i = 0; i < s.length - 3; i++) {
    if (set.has(`${s[i]}${s[i + 1]}`)) return true
  }

  return false
}