// Accepted 1101 / 1101 testcases passed Sergey Pomortsev submitted at Mar 31, 2026 18:46
// Solution Runtime 0 ms Beats 100.00% Memory 58.08 MB Beats 47.62%

function residuePrefixes(s: string): number {
  const set = new Set();
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    set.add(s[i]);
    if ((i + 1) % 3 === set.size) result++;
  }

  return result;
};