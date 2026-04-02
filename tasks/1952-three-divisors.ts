// Accepted 229 / 229 testcases passed Sergey Pomortsev submitted at Apr 02, 2026 19:56
// Solution Runtime 0 ms Beats 100.00% Memory 54.21 MB Beats 86.67%

function isThree(n: number): boolean {
  let div = 2;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) div++;
  }

  return div === 3;
};