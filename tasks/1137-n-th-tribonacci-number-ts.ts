// Accepted
// Runtime 42 ms Beats 97.44% of users with TypeScript
// Memory 49.94 MB Beats 63.64% of users with TypeScript

const tribonacci = (n: number): number => {
  if (n === 0 || n === 1) return n
  if (n === 2) return 1

  let a = 0
  let b = 1
  let c = 1
  let d

  while (n > 2) {
    n--
    d = a + b + c
    a = b
    b = c
    c = d
  }

  return c
}