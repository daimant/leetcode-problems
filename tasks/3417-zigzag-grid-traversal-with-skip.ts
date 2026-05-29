// Accepted 840 / 840 testcases passed Sergey Pomortsev submitted at Apr 01, 2026 21:40
// Solution Runtime 0 ms Beats 100.00% Memory 60.71 MB Beats 22.22%

function zigzagTraversal(grid: number[][]): number[] {
  const arr = [];

  for (let i = 0; i < grid.length; i++) {
    const curr = [];

    for (let j = 0; j < grid[0].length; j++) {
      if (i % 2 && j % 2) curr.unshift(grid[i][j]);
      else if (i % 2 === 0 && j % 2 === 0) curr.push(grid[i][j]);
    }

    arr.push(...curr);
  }

  return arr;
};