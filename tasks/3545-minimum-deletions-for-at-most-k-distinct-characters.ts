// Accepted 936 / 936 testcases passed Sergey Pomortsev submitted at Mar 04, 2026 18:55
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.84 MB Beats 14.29%

const minDeletion = (s: string, k: number): number => {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1);
  }

  return Array.from(map.values()).sort((a, b) => b - a).slice(k).reduce((acc, curr) => acc + curr, 0);
}