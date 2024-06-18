// Accepted
// Runtime 60 ms Beats 82.86% Analyze Complexity
// Memory 51.15 MB Beats 100.00%

const countCompleteDayPairs = (hours: number[]): number => {
  let result = 0

  for (let i = 0; i < hours.length - 1; i++) {
    for (let j = i + 1; j < hours.length; j++) {
      if ((hours[i] + hours[j]) % 24 === 0) result++
    }
  }

  return result
}
