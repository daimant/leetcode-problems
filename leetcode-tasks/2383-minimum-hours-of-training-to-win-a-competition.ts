// Runtime 57 ms Beats 100% Memory 44.7 MB Beats 12.50%

const minNumberOfHours = (energy: number, exp: number, energyEnemy: number[], expEnemy: number[]): number => {
  let result = 0

  for (const el of energyEnemy) {
    if (energy <= el) {
      const currEdit = el - energy + 1

      energy += currEdit
      result += currEdit
    }

    energy -= el
  }
  for (const el of expEnemy) {
    if (exp <= el) {
      const currEdit = el - exp + 1

      exp += currEdit
      result += currEdit
    }

    exp += el
  }

  return result
}
