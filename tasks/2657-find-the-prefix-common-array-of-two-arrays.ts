// Accepted 1773 / 1773 testcases passed Sergey Pomortsev submitted at Feb 05, 2026 17:59
// Solution Runtime 3 ms Beats 90.91% Analyze Complexity Memory 60.76 MB Beats 100.00%

function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const result = []
  const unique = new Set()
  let commonCount = 0

  for (let i = 0; i < A.length; i++) {
    if (unique.has(A[i])) commonCount++
    else unique.add(A[i])

    if (unique.has(B[i])) commonCount++
    else unique.add(B[i])

    result.push(commonCount)
  }

  return result
};