// Runtime 69 ms Beats 94.20% Memory 45.5 MB Beats 89.85%

const vowelStrings = (words: string[], left: number, right: number): number => {
  const letts = new Set(['a', 'e', 'i', 'o', 'u'])
  let result = 0

  for (let i = left; i <= right; i++) {
    const word = words[i]
    if (letts.has(word[0]) && letts.has(word[word.length - 1])) result++
  }

  return result
}
