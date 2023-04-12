// Runtime 55 ms Beats 100% Memory 43.2 MB Beats 100%

const filter = (arr: number[], fn: (n: number, i: number) => any): number[] => {
  for (let i = 0; i < arr.length; i++) {
    if (!fn(arr[i], i)) delete arr[i]
  }
  return arr.flat()
}
