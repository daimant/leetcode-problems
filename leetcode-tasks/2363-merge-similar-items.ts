// Runtime 98 ms Beats 76% Memory 50.2 MB Beats 64%

const mergeSimilarItems = (items1: number[][], items2: number[][]): number[][] => {
  const map = new Map(items1 as [number, number][])

  items2.forEach(el => {
    const currGet = map.get(el[0])
    map.set(el[0], currGet ? currGet + el[1] : el[1])
  })

  return Array.from(map).sort((a, b) => a[0] - b[0])
}
