// Runtime 64 ms Beats 81.25% Memory 46.4 MB Beats 12.50%

const rearrangeCharacters = (s: string, target: string): number => {
  const mapCheck = new Map()
  const mapTarget = new Map()
  let maxRep = null

  for (let i = 0; i < s.length; i++) {
    mapCheck.set(s[i], mapCheck.has(s[i]) ? mapCheck.get(s[i]) + 1 : 1)
  }
  for (let i = 0; i < target.length; i++) {
    mapTarget.set(target[i], mapTarget.has(target[i]) ? mapTarget.get(target[i]) + 1 : 1)
  }

  for (const i of mapTarget) {
    const [currLetter, currCount] = i
    const currCheck = mapCheck.has(currLetter) ? Math.trunc(mapCheck.get(currLetter) / currCount) : 0
    if (maxRep === null || currCheck < maxRep) maxRep = currCheck
  }

  return maxRep
}
