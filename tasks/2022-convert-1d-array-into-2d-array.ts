// Accepted 107 / 107 testcases passed Sergey Pomortsev submitted at Mar 04, 2026 22:20
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 76.15 MB Beats 67.27%

function construct2DArray(orig: number[], m: number, n: number): number[][] {
  if (m * n !== orig.length) return [];
  const arr = [];

  for (let i = 0; i < orig.length; i += n) {
    arr.push(orig.slice(i, i + n));
  }

  return arr;
};