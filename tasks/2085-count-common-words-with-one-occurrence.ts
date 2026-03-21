// Accepted 61 / 61 testcases passed Sergey Pomortsev submitted at Mar 04, 2026 15:54
// Solution Runtime 3 ms Beats 100.00% Analyze Complexity Memory 59.57 MB Beats 83.33%

function countWords(words1: string[], words2: string[]): number {
  const map1 = new Map();
  const map2 = new Map();
  let count = 0;

  words1.forEach(el => {
    map1.set(el, map1.has(el) ? false : true);
  })

  words2.forEach(el => {
    map2.set(el, map2.has(el) || !map1.has(el) ? false : true);
  })

  for (let el of map1) {
    if (el[1] && map2.get(el[0])) count++;
  }

  return count;
};