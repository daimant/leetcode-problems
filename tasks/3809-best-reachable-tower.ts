// Accepted 1000 / 1000 testcases passed Sergey Pomortsev submitted at Jan 23, 2026 17:36
// Solution Runtime 13 ms Beats 73.68% Analyze Complexity Memory 103.66 MB Beats 35.09%

function bestTower(towers: [number, number, number][], center: [number, number], radius: number): number[] {
  let maxQuality = -Infinity
  let bestTower = []

  towers.forEach((el, i) => {
    const reachableCondition = Math.abs((el[0] - center[0])) + Math.abs((el[1] - center[1])) <= radius
    const qualityCondition = maxQuality < el[2]
    const lexicographicalCondition = maxQuality === el[2] && el[0] + el[1] < bestTower[0] + bestTower[1]

    if (reachableCondition && (qualityCondition || lexicographicalCondition)) {
      maxQuality = el[2]
      bestTower = el.slice(0, 2)
    }
  })

  return bestTower.length ? bestTower : [-1, -1]
};