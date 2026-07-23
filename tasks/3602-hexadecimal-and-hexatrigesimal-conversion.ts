// Accepted 1000 / 1000 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 21:58
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.10 MB Beats 16.67%

const concatHex36 = (n: number): string => ((n ** 2).toString(16) + (n ** 3).toString(36)).toUpperCase()