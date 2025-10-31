// Accepted
// Runtime 1076 ms Beats 28.89% of users with TypeScript
// Memory 62.13 MB Beats 66.67% of users with TypeScript

const replaceWords = (dictionary: string[], sentence: string): string => {
  const dictionarySet = new Set(dictionary)
  const sentenceArr = sentence.split(' ')

  for (let i = 0; i < sentenceArr.length; i++) {
    for (let j = 0; j < sentenceArr[i].length; j++) {
      const currSubSentence = sentenceArr[i].slice(0, j + 1)
      if (dictionarySet.has(currSubSentence)) {
        sentenceArr[i] = currSubSentence
      }
    }
  }

  return sentenceArr.join(' ')
}

// Accepted
// Solution Runtime 86 ms Beats 100.00% of users with TypeScript
// Memory 62.72 MB Beats 60.00% of users with TypeScript

const replaceWords2 = (dictionary: string[], sentence: string): string => {
  const dictionaryMap = new Map()
  const sentenceArr = sentence.split(' ')

  for (let i = 0; i < dictionary.length; i++) {
    dictionaryMap.set(
      dictionary[i].length,
      (dictionaryMap.has(dictionary[i].length) ? dictionaryMap.get(dictionary[i].length) : new Set()).add(dictionary[i])
    )
  }

  for (let i = 0; i < sentenceArr.length; i++) {
    for (let j = 0; j < sentenceArr[i].length; j++) {
      if (!dictionaryMap.has(j + 1)) continue
      const currSubSentence = sentenceArr[i].slice(0, j + 1)
      if (dictionaryMap.get(j + 1).has(currSubSentence)) {
        sentenceArr[i] = currSubSentence
      }
    }
  }

  return sentenceArr.join(' ')
}
