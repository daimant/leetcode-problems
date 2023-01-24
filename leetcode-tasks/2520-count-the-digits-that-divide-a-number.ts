// Runtime 64 ms Beats 79.79% Memory 43.5 MB Beats 19.15%

const countDigits = (num: number): number => String(num).split('').reduce((acc, curr) => num % Number(curr) ? acc : acc + 1, 0)
