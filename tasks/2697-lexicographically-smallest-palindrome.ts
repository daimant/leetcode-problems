// Accepted 4519 / 4519 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 21:38
// Solution Runtime 7 ms Beats 100.00% Analyze Complexity Memory 66.60 MB Beats 34.21%

function makeSmallestPalindrome(s: string): string {
  const halfLen = Math.trunc(s.length / 2)
  let str1 = ''
  let str2 = ''

  for (let i = 0; i < halfLen; i++) {
    if (s[i] < s[s.length - 1 - i]) {
      str1 += s[i]
      str2 = s[i] + str2
    } else {
      str1 += s[s.length - 1 - i]
      str2 = s[s.length - 1 - i] + str2
    }
  }

  return str1 + (s.length % 2 === 0 ? '' : s[halfLen]) + str2
};