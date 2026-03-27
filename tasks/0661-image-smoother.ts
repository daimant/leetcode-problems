// Accepted 203 / 203 testcases passed Sergey Pomortsev submitted at Mar 26, 2026 23:08
// Solution Runtime 27 ms Beats 21.21% Memory 65.48 MB Beats 12.12%

function imageSmoother(img: number[][]): number[][] {
  const grid = new Array(img.length).fill(0).map(el => new Array(img[0].length).fill(0));

  for (let i = 0; i < img.length; i++) {
    for (let j = 0; j < img[0].length; j++) {
      let currArr = [img[i][j]];

      if (i > 0) {
        if (j > 0) currArr.push(img[i - 1][j - 1]);
        currArr.push(img[i - 1][j]);
        if (j + 1 < img[0].length) currArr.push(img[i - 1][j + 1]);
      }
      if (j + 1 < img[0].length) currArr.push(img[i][j + 1]);
      if (i + 1 < img.length) {
        if (j > 0) currArr.push(img[i + 1][j - 1]);
        currArr.push(img[i + 1][j]);
        if (j + 1 < img[0].length) currArr.push(img[i + 1][j + 1]);
      }
      if (j > 0) currArr.push(img[i][j - 1]);

      currArr = currArr.filter(el => el !== undefined);
      grid[i][j] = Math.trunc(currArr.reduce((acc, curr) => acc + curr, 0) / currArr.length);
    }
  }

  return grid;
};
