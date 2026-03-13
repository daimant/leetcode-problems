// Accepted 113 / 113 testcases passed Sergey Pomortsev submitted at Feb 10, 2026 17:51
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 53.71 MB Beats 96.15%

const reversePrefix = (word: string, ch: string, chI = word.indexOf(ch)): string => word.slice(0, chI + 1).split('').reverse().join('') + word.slice(chI + 1)

// more readable solution
const reversePrefix = (word: string, ch: string): string => {
  const chIndex = word.indexOf(ch)
  return `${word.slice(0, chIndex + 1).split('').reverse().join('')}${word.slice(chIndex + 1)}`
}