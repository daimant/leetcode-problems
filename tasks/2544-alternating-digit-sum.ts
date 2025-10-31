// Runtime 66 ms Beats 100% Memory 43.5 MB Beats 100%

const alternateDigitSum = (n: number): number => String(n).split('').reduce((acc, curr, i) => i % 2 ? acc - Number(curr) : acc + Number(curr), 0)
