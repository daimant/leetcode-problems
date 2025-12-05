// Accepted 1163 / 1163 testcases passed Sergey Pomortsev submitted at Dec 02, 2025 14:06
// Solution Runtime 39 ms Beats 31.58% Analyze Complexity Memory 66.33 MB Beats 26.32%

const maxDistinct = (s: string): number => new Set([...s]).size

// added optimized
// Accepted 1163 / 1163 testcases passed Sergey Pomortsev submitted at Dec 02, 2025 14:10
// Solution Runtime 20 ms Beats 89.47% Analyze Complexity Memory 62.31 MB Beats 73.68%

const maxDistinct2 = (s: string): number => {
  const unique = new Set()

  for (let i = 0; i < s.length; i++) {
    if (!unique.has(s[i])) unique.add(s[i])
  }

  return unique.size
}