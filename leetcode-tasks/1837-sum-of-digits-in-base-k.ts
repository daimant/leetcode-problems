// Runtime 53 ms Beats 80% Memory 43.1 MB Beats 55%

const sumBase = (n: number, k: number): number => {
  let parsed = ''

  while (n >= 1) {
    parsed = Math.trunc(n % k) + parsed
    n /= k
  }

  return parsed.split('').reduce((acc, curr) => acc + +curr, 0)
}
