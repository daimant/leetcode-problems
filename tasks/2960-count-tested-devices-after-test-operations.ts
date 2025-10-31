// Accepted
// Runtime 50 ms Beats 100.00% of users with TypeScript
// Memory 50.46 MB Beats 100.00% of users with TypeScript

const countTestedDevices = (batteryPercentages: number[]): number => {
  let result = 0

  for (let i = 0; i < batteryPercentages.length; i++) {
    if (batteryPercentages[i] - result > 0) result++
  }

  return result
}