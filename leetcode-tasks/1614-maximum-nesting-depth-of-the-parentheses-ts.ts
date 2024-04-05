// Accepted
// Runtime 48 ms Beats 93.90% of users with TypeScript
// Memory 51.63 MB Beats 53.66% of users with TypeScript

const maxDepth = (s: string): number => {
  let max = 0
  let depth = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      depth++
      if (depth > max) max = depth
    } else if (s[i] === ')') depth--
  }

  return max
};