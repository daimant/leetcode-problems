// Accepted 82 / 82 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 11:02
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 54.18 MB Beats 91.67%

const numOfStrings = (patterns: string[], word: string): number => patterns.filter(el => word.includes(el)).length