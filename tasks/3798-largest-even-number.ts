// Accepted 775 / 775 testcases passed Sergey Pomortsev submitted at Jan 24, 2026 22:54
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 56.66 MB Beats 84.75%

function largestEven(s: string): string {
  for (let i = 0; i < s.length; i++) {
    if (Number(s[s.length - i - 1]) % 2 === 0) return s.slice(0, s.length - i)
  }

  return ''
}