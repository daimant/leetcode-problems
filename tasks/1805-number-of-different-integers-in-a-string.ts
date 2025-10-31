// Runtime 61 ms Beats 54.55% Memory 44.6 MB Beats 81.82%

const numDifferentIntegers = (word: string): number => new Set(word.replace(/[^0-9]/gi, ' ')
  .split(' ')
  .filter(el => el)
  .map(el => BigInt(el))).size
