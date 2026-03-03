// Accepted 90 / 90 testcases passed Sergey Pomortsev submitted at Mar 03, 2026 12:29
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 57.94 MB Beats 19.05%

function projectionArea(grid: number[][]): number {
  const top = grid.flat(1).reduce((acc, curr) => acc + (curr ? 1 : 0), 0);
  const up = grid.reduce((acc, curr) => acc + Math.max(...curr), 0);
  let side = 0;

  for (let i = 0; i < grid[0].length; i++) {
    let maxInCol = 0;

    for (let j = 0; j < grid.length; j++) {
      if (maxInCol < grid[j][i]) maxInCol = grid[j][i];
    }

    side += maxInCol
  }
  return top + up + side
};