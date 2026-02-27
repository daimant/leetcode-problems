// Accepted 160 / 160 testcases passed Sergey Pomortsev submitted at Feb 26, 2026 14:55
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 54.86 MB Beats 97.98%

function countGoodSubstrings(s: string): number {
  let count = 0
  let a = s[0]
  let b = s[1]

  for (let i = 2; i < s.length; i++) {
    if (a !== b && b !== s[i] && a !== s[i]) count++

    a = b
    b = s[i]
  }

  return count
};