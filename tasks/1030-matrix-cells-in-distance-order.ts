// Accepted 66 / 66 testcases passed Sergey Pomortsev submitted at Mar 03, 2026 21:20
// Solution Runtime 21 ms Beats 54.55% Analyze Complexity Memory 70.60 MB Beats 18.18%

function allCellsDistOrder(rows: number, cols: number, rCenter: number, cCenter: number): number[][] {
  const map = new Map<number, number[][]>();

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const currDist = Math.abs(i - rCenter) + Math.abs(j - cCenter);
      map.set(currDist, map.has(currDist) ? [...map.get(currDist), [i, j]] : [[i, j]]);
    }
  }

  return Array.from(map).sort((a, b) => a[0] - b[0]).map(el => el[1]).flat(1);
};