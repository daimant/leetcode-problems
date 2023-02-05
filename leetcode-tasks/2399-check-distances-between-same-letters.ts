// Runtime 72 ms Beats 95.24% Memory 46.8 MB Beats 42.86%

const checkDistances = (s: string, distance: number[]): boolean => {
  const mapDistance = new Map(distance.map((el, i) => [String.fromCharCode(i + 97), el]))
  const mapLett: Map<string, number[]> = new Map()

  for (let i = 0; i < s.length; i++) {
    mapLett.set(s[i], mapLett.has(s[i]) ? mapLett.get(s[i]).concat(i) : [i])
  }

  const lett = Array.from(mapLett)

  for (let i = 0; i < lett.length; i++) {
    const currDistance = mapDistance.get(lett[i][0])
    const currArr = lett[i][1]
    let currResult = false

    for (let j = 0; j < currArr.length - 1; j++) {
      for (let k = j + 1; k < currArr.length; k++) {
        if (currArr[k] - currArr[j] - 1 === currDistance) currResult = true
        if (currArr[k] - currArr[j] - 1 >= currDistance) break
      }
    }

    if (!currResult) return false
  }

  return true
}
