// wrong 109 / 224 testcases passed

const similarPairs = (words: string[]): number => {
  const map: Map<string, number> = new Map()

  words.forEach(word => {
    const currWordLetters = Array.from(new Set(word.split('').sort())).join('')
    console.log(currWordLetters)

    map.set(currWordLetters, map.has(currWordLetters) ? map.get(currWordLetters) + 1 : 1)
  })

  const result = Math.max(...Array.from(map.values()))

  return result === 1 ? 0 : result
};

// Accepted 225 / 225 testcases passed Sergey Pomortsev submitted at Mar 03, 2026 23:50
// Solution Runtime 6 ms Beats 93.33% Analyze Complexity Memory 60.76 MB Beats 86.67%

function similarPairs(words: string[]): number {
  const map = new Map<string, number>();

  for (let i = 0; i < words.length; i++) {
    const currWord = [];

    for (let j = 0; j < words[i].length; j++) {
      currWord[words[i][j].charCodeAt(0) - 97] = words[i][j];
    }

    const currStr = currWord.join('')
    map.set(currStr, map.has(currStr) ? map.get(currStr) + 1 : 1)
  }

  return Array
    .from(map.values())
    .reduce((acc, curr) => {
      let count = 0;
      for (let i = 1; i <= curr; i++) {
        count += i - 1;
      }
      return acc + count;
    }, 0);
};
