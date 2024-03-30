// Accepted
// Runtime 61 ms Beats 85.71% of users with TypeScript
// Memory 54.60 MB Beats 95.24% of users with TypeScript

const findChampion = (grid: number[][]): number => grid.map(el => el.reduce((acc, el) => acc + el, 0)).reduce((acc, el, i) => el > acc[0] ? [el, i] : acc, [0, 0])[1]