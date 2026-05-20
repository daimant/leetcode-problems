// Accepted 503 / 503 testcases passed Sergey Pomortsev submitted at Feb 03, 2026 13:23
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 56.80 MB Beats 77.42%

const convertDateToBinary = (date: string): string => date.split('-').map(el => (Number(el)).toString(2)).join('-')