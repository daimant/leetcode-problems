// 194 / 201 testcases passed

const removeAnagrams = (words: string[]): string[] => {
  const set = new Set()

  for (let i = 0; i < words.length; i++) {
    const currSequence = [...words[i]].sort().join('')

    if (set.has(currSequence)) words.splice(i--, 1)
    else set.add(currSequence)
  }

  return words
}
