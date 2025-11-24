// Accepted 954 / 954 testcases passed Sergey Pomortsev submitted at Nov 23, 2025 11:46
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.29 MB Beats 22.22%

const sumAndMultiply = (n: number): number => +String(n).split('').filter(el => +el).join('') * String(n).split('').reduce((acc, curr) => acc + +curr, 0)