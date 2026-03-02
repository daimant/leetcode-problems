// Accepted 134 / 134 testcases passed Sergey Pomortsev submitted at Feb 24, 2026 21:37
// Solution Runtime 1 ms Beats 97.14% Analyze Complexity Memory 55.09 MB Beats 98.57%

function areOccurrencesEqual(s: string): boolean {
  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1)
  }

  const occ = map.get(s[0])
  return Array.from(map.values()).every(el => el === occ)
};