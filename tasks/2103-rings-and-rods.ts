// Accepted 66 / 66 testcases passed Sergey Pomortsev submitted at Feb 23, 2026 12:31
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 55.57 MB Beats 39.13%

function countPoints(rings: string): number {
  const obj = {}
  let count = 0

  for (let i = 0; i < rings.length; i += 2) {
    if (!obj[rings[i + 1]]) obj[rings[i + 1]] = {}
    if (!obj[rings[i + 1]][rings[i]]) {
      obj[rings[i + 1]][rings[i]] = true
    }
  }

  for (let key in obj) {
    if (obj[key].B && obj[key].G && obj[key].R) count++
  }

  return count
};