// Accepted 1000 / 1000 testcases passed Sergey Pomortsev submitted at Oct 26, 2025 17:08
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.37 MB Beats 100.00%

const removeZeros = (n: number): number => +String(n).split('').filter(el => el !== '0').join('')