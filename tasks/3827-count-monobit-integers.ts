// Accepted 1001 / 1001 testcases passed Sergey Pomortsev submitted at Mar 31, 2026 22:14
// Solution Runtime 22 ms Beats 24.24% Memory 62.34 MB Beats 6.06%

function countMonobit(n: number): number {
  let count = 0;

  outer: for (let i = 0; i <= n; i++) {
    const curr = i.toString(2);

    for (let j = 0; j < curr.length - 1; j++) {
      if (curr[j] !== curr[j + 1]) continue outer;
    }

    count++;
  }

  return count;
};

// optimized
// Accepted 1001 / 1001 testcases passed Sergey Pomortsev submitted at Mar 31, 2026 22:24
// Runtime 0 ms Beats 100.00% Memory 57.16 MB Beats 83.84%

function countMonobit(n: number): number {
  for (let i = 0; i < 11; i++) {
    if (n < 2 ** i - 1) return i;
  }
};