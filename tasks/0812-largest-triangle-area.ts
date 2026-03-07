// Accepted 57 / 57 testcases passed Sergey Pomortsev submitted at Mar 05, 2026 15:18
// Solution Runtime 3 ms Beats 88.10% Memory 56.52 MB Beats 61.90%

function largestTriangleArea(p: number[][]): number {
  let max = 0;

  for (let i = 0; i < p.length - 2; i++) {
    for (let j = i + 1; j < p.length - 1; j++) {
      for (let k = j + 1; k < p.length; k++) {
        const curr = Math.abs((p[j][0] - p[i][0]) * (p[k][1] - p[i][1]) - (p[k][0] - p[i][0]) * (p[j][1] - p[i][1])) / 2;
        if (max < curr) max = curr;
      }
    }
  }

  return max;
};