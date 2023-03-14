// Runtime 66 ms Beats 80.49% Memory 44.8 MB Beats 58.54%

const countPrefixes = (words: string[], s: string): number => {
  const map = new Map()
  let result = 0

  words.forEach(el => {
    map.set(el, map.has(el) ? map.get(el) + 1 : 1)
  })

  for (let i = 0; i < s.length; i++) {
    const currSeq = s.slice(0, i + 1)
    if (map.has(currSeq)) result += map.get(currSeq)
  }

  return result
}
