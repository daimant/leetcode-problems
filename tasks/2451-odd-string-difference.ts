// Runtime: 65 ms, faster than 94.74% of TypeScript online submissions for Odd String Difference.
// Memory Usage: 44.7 MB, less than 73.68% of TypeScript online submissions for Odd String Difference.

const oddString = (words: string[]): string => {
  const diffs: Map<string, [string, number]> = new Map()

  words.forEach((word, i) => {
    const currDiff = word
      .split('')
      .reduce((acc, curr, i, arr) => i < word.length - 1
        ? acc + String(arr[i + 1].charCodeAt(0) - curr.charCodeAt(0)) + ','
        : acc, '')
    const getWordInfo = diffs.get(currDiff)

    diffs.set(currDiff, getWordInfo ? [getWordInfo[0], getWordInfo[1] + 1] : [word, 1])
  })

  for (const entries of Array.from(diffs.values())) {
    if (entries[1] === 1) return entries[0]
  }
};
