// Accepted
// Runtime 60 ms Beats 100.00% of users with TypeScript
// Memory 52.26 MB Beats 100.00% of users with TypeScript

const numberOfSpecialChars = (word: string): number => {
  const result = new Set()
  const letters = new Set()

  for (let i = 0; i < word.length; i++) {
    const smallCurrLetter = word[i].toLowerCase()
    if (result.has(smallCurrLetter)) continue
    const isLower = word[i] === smallCurrLetter
    if (letters.has(isLower ? word[i].toUpperCase() : smallCurrLetter)) result.add(smallCurrLetter)
    letters.add(word[i])
  }

  return result.size
}