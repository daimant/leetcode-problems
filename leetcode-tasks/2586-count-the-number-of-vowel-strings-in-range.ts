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

// Runtime 80 ms Beats 75.36% Memory 45.5 MB Beats 89.85%

const vowelStrings2 = (words: string[], left: number, right: number, letts: Set<string> = new Set(['a', 'e', 'i', 'o', 'u'])): number => words.reduce((acc, word, i) => i >= left && i <= right && letts.has(word[0]) && letts.has(word[word.length - 1]) ? acc + 1 : acc, 0)
