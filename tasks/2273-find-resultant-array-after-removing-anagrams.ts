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

// Runtime 68 ms Beats 100% Memory 49.3 MB Beats 70.59%

const removeAnagrams2 = (words: string[]): string[] => {
  let currSequence = ''

  for (let i = 0; i < words.length; i++) {
    const currIterationSequence = [...words[i]].sort().join('')

    if (currIterationSequence === currSequence) words.splice(i--, 1)
    else currSequence = currIterationSequence
  }

  return words
}
