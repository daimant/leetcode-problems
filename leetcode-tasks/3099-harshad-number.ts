// Accepted
// Runtime 50 ms Beats 100.00% of users with TypeScript
// Memory 50.26 MB Beats 100.00% of users with TypeScript

const sumOfTheDigitsOfHarshadNumber = (x: number): number => {
  const harshad = String(x).split('').reduce((acc, curr) => acc + +curr, 0)
  return x % harshad ? -1 : harshad
}