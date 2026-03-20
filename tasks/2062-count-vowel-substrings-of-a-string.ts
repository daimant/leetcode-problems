// Accepted 88 / 88 testcases passed Sergey Pomortsev submitted at Mar 04, 2026 19:13
// Solution Runtime 6 ms Beats 73.33% Analyze Complexity Memory 58.35 MB Beats 60.00%

function countVowelSubstrings(word: string): number {
  const setV = new Set(['a', 'e', 'i', 'o', 'u']);
  let result = 0;

  for (let i = 0; i < word.length; i++) {
    const currSub = new Set();

    for (let j = i; j < word.length; j++) {
      if (setV.has(word[j])) {
        currSub.add(word[j]);
        if (currSub.size >= 5) result++;
      } else break;
    }
  }

  return result;
};