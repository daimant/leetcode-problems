// Accepted
// Runtime 60 ms Beats 96.23%
// Memory 52.26 MB Beats 64.15%

const maximumNumberOfStringPairs = (words: string[]): number => {
  const set = new Set
  let count = 0

  for (let i = 0; i < words.length; i++) {
    if (set.has(`${words[i][1]}${words[i][0]}`)) count++
    set.add(words[i])
  }

  return count
}
