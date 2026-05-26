// Accepted 608 / 608 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 22:39
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 57.46 MB Beats 29.63%

const smallestNumber = (n: number): number => parseInt(n.toString(2).split('').map(_ => 1).join(''), 2)