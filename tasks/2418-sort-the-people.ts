// Runtime 74 ms Beats 100% Memory 47.7 MB Beats 68.87%

const sortPeople = (names: string[], heights: number[]): string[] =>
  (names.map((el, i) => [el, heights[i]]) as [string, number][])
    .sort((a, b) => a[1] > b[1] ? -1 : 1)
    .map(el => el[0])
