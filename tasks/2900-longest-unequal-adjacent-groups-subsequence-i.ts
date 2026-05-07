// Accepted 382 / 382 testcases passed Sergey Pomortsev submitted at Mar 27, 2026 09:26
// Solution Runtime 0 ms Beats 100.00% Memory 58.94 MB Beats 47.37%

function getLongestSubsequence(words: string[], groups: number[]): string[] {
  const arr = [];

  for (let i = 0; i < groups.length; i++) {
    if (groups[i] !== groups[i - 1]) arr.push(words[i]);
  }

  return arr;
};