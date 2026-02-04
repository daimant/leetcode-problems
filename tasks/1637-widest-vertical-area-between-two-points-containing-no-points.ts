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