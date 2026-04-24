// Accepted 1542 / 1542 testcases passed Sergey Pomortsev submitted at Feb 25, 2026 20:04
// Solution Runtime 2 ms Beats 86.96% Analyze Complexity Memory 60.76 MB Beats 13.04%

function minLength(s: string): number {
  let isChanged = true

  while (isChanged) {
    isChanged = false

    for (let i = 0; i < s.length - 1; i++) {
      if ((s[i] === 'A' && s[i + 1] === 'B') || (s[i] === 'C' && s[i + 1] === 'D')) {
        isChanged = true
        s = s.slice(0, i) + s.slice(i + 2)
        break
      }
    }
  }

  return s.length
};