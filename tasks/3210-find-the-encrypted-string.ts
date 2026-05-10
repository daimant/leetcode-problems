// Accepted 704 / 704 testcases passed Sergey Pomortsev submitted at Mar 26, 2026 15:31
// Solution Runtime 0 ms Beats 100.00% Memory 56.96 MB Beats 85.71%

function getEncryptedString(s: string, k: number): string {
  const split = k % s.length
  return s.slice(split) + s.slice(0, split);
};