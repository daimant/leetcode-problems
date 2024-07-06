// Accepted
// Runtime 125 ms Beats 87.50%
// Memory 56.72 MB Beats 100.00%

const distanceTraveled = (mainTank: number, additionalTank: number): number => {
  let distance = 0

  while (mainTank > 0) {
    if (mainTank >= 5) {
      distance += 50
      mainTank -= 5

      if (additionalTank > 0) {
        mainTank++
        additionalTank--
      }
    } else {
      distance += mainTank * 10
      mainTank = 0
    }
  }

  return distance
}
