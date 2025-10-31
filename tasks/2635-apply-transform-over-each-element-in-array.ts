// Runtime 58 ms Beats 100% Memory 42.2 MB Beats 100%

const map2 = (arr: number[], fn: (n: number, i: number) => number): number[] => {
  for (let i = 0; i < arr.length; i++) arr[i] = fn(arr[i], i)
  return arr
}
