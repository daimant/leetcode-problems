// Accepted
// Runtime 59 ms Beats 85.71%
// Memory 51.69 MB Beats 71.43%

const isFascinating = (n: number): boolean =>
  new Set([...`${n}${n * 2}${n * 3}`]).size === 9
  && `${n}${n * 2}${n * 3}`.indexOf('0') === -1
  && `${n}${n * 2}${n * 3}`.length === 9
