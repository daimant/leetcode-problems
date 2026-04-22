// Accepted 303 / 303 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 19:07
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 58.16 MB Beats 36.92%

const countSeniors = (details: string[]): number => details.reduce((acc, el) => +el.slice(11, 13) >= 60 ? acc + 1 : acc, 0)