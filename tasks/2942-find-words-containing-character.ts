// Accepted
// Runtime 68 ms Beats 94.14% of users with TypeScript
// Memory 54.00 MB Beats 36.94% of users with TypeScript

const findWordsContaining = (words: string[], x: string): number[] => {
  const result = []

  for (let i = 0; i < words.length; i++) {
    if (words[i].includes(x)) result.push(i)
  }

  return result
}