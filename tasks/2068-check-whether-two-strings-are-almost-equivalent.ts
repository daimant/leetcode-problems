// Accepted 196 / 196 testcases passed Sergey Pomortsev submitted at Apr 02, 2026 19:48
// Solution Runtime 1 ms Beats 90.48% Memory 56.27 MB Beats 90.48%æ

function checkAlmostEquivalent(word1: string, word2: string): boolean {
  const map1 = new Map();
  const map2 = new Map();

  for (let i = 0; i < word1.length; i++) {
    map1.set(word1[i], map1.has(word1[i]) ? map1.get(word1[i]) + 1 : 1);
    map2.set(word2[i], map2.has(word2[i]) ? map2.get(word2[i]) + 1 : 1);
  }

  for (let el of map1) {
    if (Math.abs(el[1] - (map2.get(el[0]) || 0)) >= 4) return false;
  }

  for (let el of map2) {
    if (Math.abs(el[1] - (map1.get(el[0]) || 0)) >= 4) return false;
  }

  return true;
};