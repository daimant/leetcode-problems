// Accepted
// Runtime 58 ms Beats 94.85% Analyze Complexity
// Memory 51.79 MB Beats 92.78%

const clearDigits = (s: string): string => {
  const result = s.split('')
  for (let i = 1; i < result.length;) {
    if (Number.isFinite(+result[i])) {
      result.splice(i - 1, 2)
      i--
    } else i++
  }

  return result.join('')
}
