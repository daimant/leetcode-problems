// Accepted 1000 / 1000 testcases passed Sergey Pomortsev submitted at May 26, 2026 21:16
// Runtime 0 ms Beats 100.00% Memory 57.80 MB Beats 74.16%

function isAdjacentDiffAtMostTwo(s: string): boolean {
  for (let i = 0; i < s.length - 1; i++) {
    if (Math.abs(Number(s[i]) - Number(s[i + 1])) > 2) return false;
  }

  return true;
};