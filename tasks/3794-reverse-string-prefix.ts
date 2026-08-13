// Accepted 999 / 999 testcases passed Sergey Pomortsev submitted at Feb 03, 2026 17:50
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 57.96 MB Beats 47.34%

const reversePrefix = (s: string, k: number): string => [...s].slice(0, k).reverse().join('') + s.slice(k)