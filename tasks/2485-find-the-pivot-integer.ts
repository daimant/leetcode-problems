// Runtime: 103 ms, faster than 100.00% of TypeScript online submissions for Find the Pivot Integer.
// Memory Usage: 46 MB, less than 100.00% of TypeScript online submissions for Find the Pivot Integer.
// two pass

const pivotInteger = (n: number): number => {
  const setSumsFromStart = []
  let acc = 0

  for (let i = 1; i <= n; i++) {
    acc += i
    setSumsFromStart.push(acc)
  }

  acc = 0

  for (let i = n; i > 0; i--) {
    acc += i
    if (setSumsFromStart[i - 1] === acc) return i
  }

  return -1
}

// Accepted
// Runtime 50 ms Beats 96.88% of users with TypeScript
// Memory 53.96 MB Beats 6.25% of users with TypeScript

const pivotInteger2 = (n: number): number => {
  const setSumsFromStart = []
  const setSumsFromEnd = []
  let accLeft = 0
  let accRight = 0

  for (let i = 0; i < n; i++) {
    accLeft += i + 1
    accRight += n - i
    setSumsFromStart.push(accLeft)
    setSumsFromEnd[n - i - 1] = accRight
    if (setSumsFromEnd[i] === accLeft) return i + 1
    if (setSumsFromStart[n - i - 1] === accRight) return n - i + 1
  }

  return -1
}