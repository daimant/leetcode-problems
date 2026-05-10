// Accepted 770 / 770 testcases passed Sergey Pomortsev submitted at Mar 25, 2026 17:10
// Solution Runtime 2450 ms Beats 5.15% Memory 207.26 MB Beats 5.42%

function numberOfSubmatrices(grid: string[][]): number {
  const mapCols = new Map<string, number | null>();
  const mapGrids = new Map<string, number | null>();

  let result = 0;

  for (let j = 0; j < grid[0].length; j++) {
    let curr = null;

    for (let i = 0; i < grid.length; i++) {
      if (grid[i][j] === 'X') {
        if (curr === null) curr = 1;
        else curr++;
      } else if (grid[i][j] === 'Y') {
        if (curr === null) curr = -1;
        else curr--;
      }

      mapCols.set(`${i}-${j}`, curr);
      if (j === 0) {
        mapGrids.set(`${i}-${j}`, curr);
        if (curr === 0) result++;
      }
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 1; j < grid[0].length; j++) {
      const prev = mapGrids.get(`${i}-${j - 1}`);
      const col = mapCols.get(`${i}-${j}`);
      let curr = [prev, col].some(el => el !== null && el !== undefined) ? (prev || 0) + (col || 0) : null;

      mapGrids.set(`${i}-${j}`, curr);

      if (curr === 0) result++;
    }
  }

  return result;
};