// Accepted 687 / 687 testcases passed Sergey Pomortsev submitted at Mar 25, 2026 17:45
// Solution Runtime 53 ms Beats 50.00% Memory 89.02 MB Beats 50.00%

function canPartitionGrid(grid: number[][]): boolean {
  const rows = [];
  const cols = [];
  let rowsSumLeft = 0;
  let rowsSumRight = 0;
  let colsSumLeft = 0;
  let colsSumRight = 0;

  for (let i = 0; i < grid.length; i++) {
    let currSum = 0;
    for (let j = 0; j < grid[0].length; j++) {
      currSum += grid[i][j];
    }
    rows.push(currSum);
    rowsSumRight += currSum;
  }


  for (let j = 0; j < grid[0].length; j++) {
    let currSum = 0;
    for (let i = 0; i < grid.length; i++) {
      currSum += grid[i][j];
    }
    cols.push(currSum);
    colsSumRight += currSum;
  }

  for (let i = 0; i < rows.length - 1; i++) {
    rowsSumRight -= rows[i];
    rowsSumLeft += rows[i];
    if (rowsSumLeft === rowsSumRight) return true;
  }

  for (let i = 0; i < cols.length - 1; i++) {
    colsSumRight -= cols[i];
    colsSumLeft += cols[i];
    if (colsSumLeft === colsSumRight) return true;
  }

  return false;
};

// Accepted 687 / 687 testcases passed Sergey Pomortsev submitted at Mar 25, 2026 17:57
// Solution Runtime 40 ms Beats 100.00% Memory 85.59 MB Beats 100.00%

function canPartitionGrid(grid: number[][]): boolean {
  const rows = [];
  const cols = [];
  const allElements = grid.map((el) => el.reduce((acc, curr) => acc + curr, 0)).reduce((acc, curr) => acc + curr, 0)
  let rowsSum = 0;
  let colsSum = 0;

  for (let i = 0; i < grid.length - 1; i++) {
    let currSum = 0;

    for (let j = 0; j < grid[0].length; j++) {
      currSum += grid[i][j];
    }

    rowsSum += currSum;
    if (rowsSum === allElements - rowsSum) return true;
  }

  for (let j = 0; j < grid[0].length - 1; j++) {
    let currSum = 0;

    for (let i = 0; i < grid.length; i++) {
      currSum += grid[i][j];
    }

    colsSum += currSum;
    if (colsSum === allElements - colsSum) return true;
  }

  return false;
};