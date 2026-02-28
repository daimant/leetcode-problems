// Accepted 20 / 20 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 10:49
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 57.74 MB Beats 53.33%

function canBeTypedWords(text: string, brokenLetters: string): number {
  const brokenButtonsSet = new Set(brokenLetters.split(''))
  const words = text.split(' ')
  return words.filter(el => el.split('').every(el => !brokenButtonsSet.has(el))).length
};