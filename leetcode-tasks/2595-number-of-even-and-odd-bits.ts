// Runtime 71 ms Beats 82.35% Memory 45.4 MB Beats 17.65%

const evenOddBit = (n: number): number[] => {
  let bins = []

  while (n >= 1) {
    const curr = n % 2
    bins.push(curr)
    n = (n - curr) / 2
  }

  return bins.reduce((acc, curr, i) => curr ? (i % 2 ? [acc[0], acc[1] + 1] : [acc[0] + 1, acc[1]]) : acc, [0, 0])
}
