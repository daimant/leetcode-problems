const mostWordsFound = (els: string[]): number => Math.max(...els.map(el => el.split(' ').length))

// Runtime: 72 ms, faster than 91.72% of TypeScript online submissions for Maximum Number of Words Found in Sentences.
// Memory Usage: 45.6 MB, less than 7.64% of TypeScript online submissions for Maximum Number of Words Found in Sentences.
