// wrong 109 / 224 testcases passed

const similarPairs = (words: string[]): number => {
  const map: Map<string, number> = new Map()

  words.forEach(word => {
    const currWordLetters = Array.from(new Set(word.split('').sort())).join('')
    console.log(currWordLetters)

    map.set(currWordLetters, map.has(currWordLetters) ? map.get(currWordLetters) + 1 : 1)
  })

  const result = Math.max(...Array.from(map.values()))

  return result === 1 ? 0 : result
};
