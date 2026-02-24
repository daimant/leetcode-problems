// Accepted 39 / 39 testcases passed Sergey Pomortsev submitted at Feb 24, 2026 12:37
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 57.49 MB Beats 16.49%

function calPoints(operations: string[]): number {
  const arr = []

  for (let operation of operations) {
    if (+operation) arr.push(+operation)
    else if (operation === '+') arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    else if (operation === 'D') arr.push(arr[arr.length - 1] * 2)
    else if (operation === 'C') arr.pop()
  }

  return arr.reduce((acc, curr) => acc + curr, 0)
};