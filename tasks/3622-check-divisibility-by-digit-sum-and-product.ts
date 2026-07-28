// Accepted 636 / 636 testcases passed Sergey Pomortsev submitted at Mar 19, 2026 14:34
// Solution Runtime 0 ms Beats 100.00% Memory 56.92 MB Beats 40.00%

const checkDivisibility = (n: number, arr = n.toString().split('')): boolean => n % (arr.reduce((a, c) => a + +c, 0) + arr.reduce((a, c) => a * +c, 1)) === 0