// Runtime 50 ms Beats 93.75% Memory 45 MB Beats 10.42%

const splitNum = (num: number): number => {
  const arr = String(num)
    .split('')
    .sort((a, b) => a > b ? 1 : -1)
    .reduce((acc, curr, i) => i % 2 ? [acc[0] + curr, acc[1]] : [acc[0], acc[1] + curr], ['', ''])

  return Number(arr[0]) + Number(arr[1])
}
