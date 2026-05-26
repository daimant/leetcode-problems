// Accepted 1000 / 1000 testcases passed Sergey Pomortsev submitted at Apr 01, 2026 23:04
// Solution Runtime 0 ms Beats 100.00% Memory 58.14 MB Beats 0.00%

function smallestNumber(n: number, t: number): number {
  while (true) {
    const curr = n.toString().split('').reduce((acc, curr) => acc * +curr, 1);
    if (curr % t === 0) return n;
    n++;
  }
};