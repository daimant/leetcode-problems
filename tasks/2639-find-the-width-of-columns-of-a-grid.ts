// Accepted 50 / 50 testcases passed Sergey Pomortsev submitted at Mar 12, 2026 14:57
// Solution Runtime 1 ms Beats 96.00% Memory 58.59 MB Beats 76.00%

function findColumnWidth(grid: number[][]): number[] {
  const result = [];

  for (let j = 0; j < grid[0].length; j++) {
    let colMax = 0;
    for (let i = 0; i < grid.length; i++) {
      const currLen = grid[i][j].toString().length;
      if (colMax < currLen) colMax = currLen;
    }

    result.push(colMax);
  }

  return result;
};