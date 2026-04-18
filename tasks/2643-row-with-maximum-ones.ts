// Accepted 1049 / 1049 testcases passed Sergey Pomortsev submitted at Mar 03, 2026 19:41
// Solution Runtime 3 ms Beats 65.22% Analyze Complexity Memory 63.62 MB Beats 73.91%

function rowAndMaximumOnes(mat: number[][]): number[] {
  let max = 0;
  let idx = 0;

  for (let i = 0; i < mat.length; i++) {
    let currOnes = 0;

    for (let j = 0; j < mat[i].length; j++) {
      if (mat[i][j]) currOnes++;
    }

    if (currOnes > max) {
      max = currOnes;
      idx = i;
    }
  }

  return [idx, max];
};