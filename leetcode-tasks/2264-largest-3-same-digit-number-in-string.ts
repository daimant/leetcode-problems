// Runtime 68 ms Beats 72.22% Memory 44.6 MB Beats 77.78%

const largestGoodInteger = (num: string): string => {
  let result = ''

  for (let i = 0; i < num.length - 2; i++) {
    if (num[i] !== num[i + 1] || num[i] !== num[i + 2]) continue
    const currSeq = num.slice(i, i + 3)
    if (currSeq > result) result = currSeq
  }

  return result
}
