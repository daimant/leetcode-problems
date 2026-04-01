// Accepted 75 / 75 testcases passed Sergey Pomortsev submitted at Feb 17, 2026 15:41
// Solution Runtime 96 ms Beats 43.48% Analyze Complexity Memory 78.82 MB Beats 34.78%

function garbageCollection(garbage: string[], travel: number[]): number {
  let result = 0
  const lastHouseToVisitCollection = new Map([['M', -1], ['P', -1], ['G', -1]])

  for (let i = 0; i < garbage.length; i++) {
    if (garbage[i].includes('M')) lastHouseToVisitCollection.set('M', i)
    if (garbage[i].includes('P')) lastHouseToVisitCollection.set('P', i)
    if (garbage[i].includes('G')) lastHouseToVisitCollection.set('G', i)
  }

  const collect = (type: string, lastHouseToVisit: number) => {

    for (let i = 0; i <= lastHouseToVisit; i++) {
      if (i !== lastHouseToVisit) result += travel[i]
      result += garbage[i].split('').filter(el => el === type).length
    }
  }

  Array.from(lastHouseToVisitCollection).forEach(el => {
    if (el[1] !== -1) collect(el[0], el[1])
  })

  return result
};

// Accepted 75 / 75 testcases passed Sergey Pomortsev submitted at Feb 17, 2026 15:54
// Solution Runtime 17 ms Beats 95.65% Analyze Complexity Memory 69.34 MB Beats 82.61%

function garbageCollection(garbage: string[], travel: number[]): number {
  let result = 0
  let travelFromLastM = 0
  let travelFromLastP = 0
  let travelFromLastG = 0

  for (let i = 0; i < garbage.length; i++) {
    result += garbage[i].length

    travelFromLastM += travel[i - 1] || 0
    travelFromLastP += travel[i - 1] || 0
    travelFromLastG += travel[i - 1] || 0

    if (garbage[i].includes('M')) {
      result += travelFromLastM
      travelFromLastM = 0
    }

    if (garbage[i].includes('P')) {
      result += travelFromLastP
      travelFromLastP = 0
    }

    if (garbage[i].includes('G')) {
      result += travelFromLastG
      travelFromLastG = 0
    }
  }

  return result
};