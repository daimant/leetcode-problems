// Accepted
// Runtime 48 ms Beats 100.00%
// Memory 54.58 MB Beats 35.71%

const kthDistinct = (arr: string[], k: number): string => {
  const unique = new Map<string, number>()
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    unique.set(arr[i], unique.has(arr[i]) ? 2 : 1)
  }

  const currArr = Array.from(unique.entries())

  for (let i = 0; i < currArr.length; i++) {
    if (currArr[i][1] === 1) count++
    if (count === k) return currArr[i][0] as string
  }

  return ''
}
