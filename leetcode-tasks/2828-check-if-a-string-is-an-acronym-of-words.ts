// Accepted
// Runtime 76 ms Beats 98.85%
// Memory 54.18 MB Beats 75.86%

const isAcronym = (words: string[], s: string): boolean => words.map(el => el[0]).join('') === s
