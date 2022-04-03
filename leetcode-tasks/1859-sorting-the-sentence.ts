const sortSentence = (s: string): string => s
  .split(' ')
  .sort((a, b) => Number(a[a.length - 1]) - Number(b[b.length - 1]))
  .map(el => el.slice(0, el.length - 1))
  .join(' ');

// Runtime: 60 ms, faster than 98.04% of TypeScript online submissions for Sorting the Sentence.
// Memory Usage: 43.7 MB, less than 13.72% of TypeScript online submissions for Sorting the Sentence.
