// Accepted
// Runtime 48 ms Beats 99.07% of users with TypeScript
// Memory 51.65 MB Beats 73.83% of users with TypeScript

const minimumPushes = (word: string): number => {
  let length = word.length
  if (length <= 8) return length
  length -= 8
  if (length <= 8) return 8 + length * 2
  length -= 8
  if (length <= 8) return 8 + 16 + length * 3
  return 8 + 16 + 24 + ( length - 8 ) * 4
}