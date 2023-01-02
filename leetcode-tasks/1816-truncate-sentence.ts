// Runtime 68 ms Beats 88.24% Memory 43.4 MB Beats 55.29%

const truncateSentence = (s: string, k: number): string => s.split(' ').map((el, i) => i < k ? el : '').join(' ').trim()
