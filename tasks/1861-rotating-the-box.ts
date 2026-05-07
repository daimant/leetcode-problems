// Accepted 87 / 87 testcases passed Sergey Pomortsev submitted at May 06, 2026 21:03
// Solution Runtime 71 ms Beats 22.22% Memory 85.67 MB Beats 11.11%

function rotateTheBox(boxGrid: string[][]): string[][] {
  for (let i = 0; i < boxGrid.length; i++) {
    let start = null;
    let stnCount = 0;

    for (let j = 0; j <= boxGrid[i].length; j++) {
      if (boxGrid[i][j] === '*' || j === boxGrid[i].length) {
        if (j - start !== 0 && stnCount && j - start > stnCount) {
          boxGrid[i].splice(start, j - start, ...boxGrid[i].slice(start, j).sort((a, b) => b === '.' && a !== '.' ? 1 : -1));
        }

        start = null;
        stnCount = 0;
      } else {
        if (start === null) start = j;
        if (boxGrid[i][j] === '#') stnCount++;
      }
    }
  }

  const newGrid = new Array(boxGrid[0].length).fill([]).map(el => new Array(boxGrid.length).fill(''));

  for (let i = 0; i < boxGrid.length; i++) {
    for (let j = 0; j < boxGrid[0].length; j++) {
      newGrid[j][boxGrid.length - 1 - i] = boxGrid[i][j];
    }
  }

  return newGrid;
};