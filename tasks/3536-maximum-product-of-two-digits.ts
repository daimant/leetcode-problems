// Accepted 1088 / 1088 testcases passed Sergey Pomortsev submitted at Mar 23, 2026 22:27
// Solution Runtime 1 ms Beats 100.00% Memory 58.05 MB Beats 100.00%

function maxProduct(n: number): number {
  return n.toString().split('').sort((a, b) => b > a ? 1 : -1).slice(0, 2).reduce((acc, curr) => acc * +curr, 1);
};