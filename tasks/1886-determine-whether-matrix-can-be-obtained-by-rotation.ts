// Accepted 113 / 113 testcases passed Sergey Pomortsev submitted at Mar 22, 2026 17:17
// Solution Runtime 0 ms Beats 100.00% Memory 56.58 MB Beats 45.83%

function findRotation(mat: number[][], target: number[][]): boolean {
  const targetStr = JSON.stringify(target);
  if (targetStr === JSON.stringify(mat)) return true;

  const temp = new Array(mat.length).fill(null).map(el => new Array(mat.length).fill(null));

  for (let i = 0; i < 3; i++) {
    rotate(mat, temp);
    const currTempStr = JSON.stringify(temp);

    if (targetStr === currTempStr) return true;

    mat = JSON.parse(currTempStr);
  }

  return false;
};

function rotate(grid: number[][], tempArr: number[][]) {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
      tempArr[j][grid.length - 1 - i] = grid[i][j];
    }
  }
}