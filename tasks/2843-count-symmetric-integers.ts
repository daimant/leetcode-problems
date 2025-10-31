// Accepted
// Runtime 227 ms Beats 30.65% of users with TypeScript
// Memory 57.60 MB Beats 45.16% of users with TypeScript

const countSymmetricIntegers = (low: number, high: number): number => {
  let result = 0

  for (let i = low; i <= high; i++) {
    const curr = String(i)
    if (curr.length % 2) continue
    const [left, right] = [curr.slice(0, curr.length / 2), curr.slice(curr.length / 2)]
    if (left.split('').reduce((acc, curr) => acc + +curr, 0) === right.split('').reduce((acc, curr) => acc + +curr, 0)) result++
  }

  return result
}
