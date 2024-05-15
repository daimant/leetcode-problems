// Accepted
// Runtime 57 ms Beats 96.15% of users with TypeScript
// Memory 52.62 MB Beats 46.15% of users with TypeScript

const findPermutationDifference = (s: string, t: string): number => {
  const sMap = new Map(s.split('').map((el, i) => [el, i]))
  let result = 0

  for (let i = 0; i < t.length; i++) {
    result += Math.abs(sMap.get(t[i]) - i)
  }

  return result
}
