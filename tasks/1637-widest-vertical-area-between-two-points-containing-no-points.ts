// Accepted 56 / 56 testcases passed Sergey Pomortsev submitted at Feb 03, 2026 18:54
// Solution Runtime 61 ms Beats 69.23% Analyze Complexity Memory 78.84 MB Beats 46.15%

function maxWidthOfVerticalArea(points: number[][]): number {
  let maxLen = 0
  points.sort((a, b) => a[0] - b[0])

  for (let i = 0; i < points.length - 1; i++) {
    const currDiff = points[i + 1][0] - points[i][0]
    if (currDiff > maxLen) maxLen = currDiff
  }

  return maxLen
};

// optimize
// Accepted 56 / 56 testcases passed Sergey Pomortsev submitted at Feb 03, 2026 18:58
// Solution Runtime 39 ms Beats 100.00% Analyze Complexity Memory 79.95 MB Beats 19.23%

function maxWidthOfVerticalArea(points: number[][]): number {
  let maxLen = 0
  const pointsFlat = points.map(el => el[0]).sort((a, b) => a - b)

  for (let i = 0; i < pointsFlat.length - 1; i++) {
    const currDiff = pointsFlat[i + 1] - pointsFlat[i]
    if (currDiff > maxLen) maxLen = currDiff
  }

  return maxLen
};