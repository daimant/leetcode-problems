// Accepted 914 / 914 testcases passed Sergey Pomortsev submitted at Mar 27, 2026 15:01
// Solution Runtime 7 ms Beats 0.00% Memory 60.06 MB Beats 11.11%

function areSimilar(mat: number[][], k: number): boolean {
  const newGrid = new Array(mat.length).fill(0).map(el => new Array(mat[0].length).fill(0));

  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      const newJ = i % 2 ? (j + k) % mat[0].length : ((j - k % mat[0].length) + mat[0].length) % mat[0].length;
      newGrid[i][newJ] = mat[i][j];
    }
  }

  return JSON.stringify(mat) === JSON.stringify(newGrid);
};