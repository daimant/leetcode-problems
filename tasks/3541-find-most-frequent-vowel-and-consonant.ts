// Accepted 812 / 812 testcases passed Sergey Pomortsev submitted at Feb 01, 2026 14:48
// Solution Runtime 2 ms Beats 95.90% Analyze Complexity Memory 57.77 MB Beats 83.61%

const vovels = ['a', 'e', 'i', 'o', 'u']

function maxFreqSum(s: string): number {
  const mapV = new Map()
  let maxVCount = 0
  let maxV
  const mapC = new Map()
  let maxCCount = 0
  let maxC

  s.split('').forEach(el => {
    const isV = vovels.includes(el)
    const map = isV ? mapV : mapC
    const maxCount = isV ? maxVCount : maxCCount

    if (map.has(el)) map.set(el, map.get(el) + 1)
    else map.set(el, 1)

    if (map.get(el) > maxCount) {
      if (isV) maxVCount = map.get(el)
      else maxCCount = map.get(el)

      if (isV) maxV = el
      else maxC = el
    }
  })

  return maxVCount + maxCCount
};