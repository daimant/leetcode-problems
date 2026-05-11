// Accepted 652 / 652 testcases passed Sergey Pomortsev submitted at Feb 28, 2026 11:34
// Solution Runtime 23 ms Beats 94.44% Analyze Complexity Memory 65.93 MB Beats 83.33%

class NeighborSum {
  grid = [];
  adMap = new Map<number, number>();
  diMap = new Map<number, number>();
  idxMap = new Map<number, [number, number]>();

  constructor(grid: number[][]) {
    this.grid = grid;
  }

  adjacentSum(value: number): number {
    if (this.adMap.has(value)) return this.adMap.get(value);

    const [i, j] = this.getIdx(value);
    const top = i > 0 ? this.grid[i - 1][j] : 0;
    const left = j > 0 ? this.grid[i][j - 1] : 0;
    const right = j < this.grid[0].length - 1 ? this.grid[i][j + 1] : 0;
    const bottom = i < this.grid.length - 1 ? this.grid[i + 1][j] : 0;
    const currAd = top + left + right + bottom;
    this.adMap.set(value, currAd);

    return currAd;
  }

  diagonalSum(value: number): number {
    if (this.diMap.has(value)) return this.diMap.get(value);

    const [i, j] = this.getIdx(value);
    let topLeft = 0;
    let topRight = 0;
    let bottomLeft = 0;
    let bottomRight = 0;

    if (i > 0) {
      if (j > 0) topLeft = this.grid[i - 1][j - 1];
      if (j < this.grid[0].length - 1) topRight = this.grid[i - 1][j + 1];
    }
    if (i < this.grid.length - 1) {
      if (j > 0) bottomLeft = this.grid[i + 1][j - 1];
      if (j < this.grid[0].length - 1) bottomRight = this.grid[i + 1][j + 1];
    }

    const currDi = topLeft + topRight + bottomLeft + bottomRight;
    this.diMap.set(value, currDi);

    return currDi;
  }

  private getIdx(value: number) {
    if (this.idxMap.has(value)) return this.idxMap.get(value);

    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[0].length; j++) {
        if (this.grid[i][j] === value) return [i, j];
      }
    }
  }
}

/**
 * Your NeighborSum object will be instantiated and called as such:
 * var obj = new NeighborSum(grid)
 * var param_1 = obj.adjacentSum(value)
 * var param_2 = obj.diagonalSum(value)
 */