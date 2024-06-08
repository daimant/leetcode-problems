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
