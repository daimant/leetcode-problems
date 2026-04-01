// Accepted 179 / 179 testcases passed Sergey Pomortsev submitted at Mar 31, 2026 20:22
// Solution Runtime 9 ms Beats 94.12% Memory 59.19 MB Beats 41.18%

function makeEqual(words: string[]): boolean {
  const map = new Map();
  let lettersCount = 0

  for (let i = 0; i < words.length; i++) {
    words[i].split('').forEach(el => {
      map.set(el, map.has(el) ? map.get(el) + 1 : 1);
      lettersCount++;
    })
  }

  return Array.from(map.values()).every(el => el % words.length === 0);
};