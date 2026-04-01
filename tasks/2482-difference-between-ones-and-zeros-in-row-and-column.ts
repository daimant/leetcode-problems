// Accepted 85 / 85 testcases passed Sergey Pomortsev submitted at Feb 25, 2026 21:29
// Solution Runtime 71 ms Beats 71.43% Analyze Complexity Memory 95.58 MB Beats 42.86%

function onesMinusZeros(grid: number[][]): number[][] {
  const colsMap = new Map<number, { ones: number, zeroes: number }>();
  const rowsMap = new Map<number, { ones: number, zeroes: number }>();

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const colsGet = colsMap.get(j);
      const rowsGet = rowsMap.get(i);
      const curr = grid[i][j];

      if (colsGet) {
        if (curr) colsGet.ones++;
        else colsGet.zeroes++;
        colsMap.set(j, colsGet);
      } else colsMap.set(j, { ones: curr ? 1 : 0, zeroes: curr ? 0 : 1 });
      if (rowsGet) {
        if (curr) rowsGet.ones++;
        else rowsGet.zeroes++;
        rowsMap.set(i, rowsGet);
      } else rowsMap.set(i, { ones: curr ? 1 : 0, zeroes: curr ? 0 : 1 });
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const getCol = colsMap.get(j);
      const getRow = rowsMap.get(i);
      grid[i][j] = getCol.ones + getRow.ones - getCol.zeroes - getRow.zeroes;
    }
  }

  return grid;
};