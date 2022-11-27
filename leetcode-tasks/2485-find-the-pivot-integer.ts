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
};
