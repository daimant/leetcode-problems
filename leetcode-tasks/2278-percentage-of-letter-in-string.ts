// Runtime 53 ms Beats 100% Memory 43.5 MB Beats 25%

const percentageLetter = (s: string, letter: string): number => Math.trunc([...s].filter(el => el === letter).length / s.length * 100)
