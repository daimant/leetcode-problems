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
// Runtime 62 ms Beats 88.89% Memory 47.4 MB Beats 16.67%

const largestGoodInteger2 = (num: string): string => {
  let result = ''
  let cache = { a: '', b: num[0], c: num[1] }

  for (let i = 0; i < num.length - 2; i++) {
    [cache.a, cache.b, cache.c] = [cache.b, cache.c, num[i + 2]]
    if (cache.a === cache.b && cache.a === cache.c && `${cache.a}${cache.b}${cache.c}` > result) result = `${cache.a}${cache.b}${cache.c}`
  }

  return result
}
