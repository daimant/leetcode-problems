// Runtime 57 ms Beats 90% Memory 43.2 MB Beats 30%

const squareIsWhite = (c: string): boolean => c[0].charCodeAt(0) % 2 === 0 && +c[1] % 2 !== 0 || c[0].charCodeAt(0) % 2 !== 0 && +c[1] % 2 === 0
