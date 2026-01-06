// Accepted 999 / 999 testcases passed Sergey Pomortsev submitted at Jan 03, 2026 12:16
// Solution 1024 2025 Rewind ⏪ Remember the Journey, Carry It Forward! Runtime 0 ms Beats 100.00%  Analyze Complexity Memory 57.70 MB Beats 60.83%

function mirrorDistance(n: number): number {
  return Math.abs(n - Number(String(n).split('').reverse().join('')))
}