// Accepted
// Runtime 60 ms Beats 86.08% of users with TypeScript
// Memory 52.29 MB Beats 44.30% of users with TypeScript

const minimumChairs = (s: string): number => {
  let result = 0
  let count = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'E') count++
    else count--

    if (count > result) result = count
  }

  return result
}
