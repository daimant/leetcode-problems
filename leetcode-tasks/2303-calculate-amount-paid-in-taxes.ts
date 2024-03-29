// Runtime 62 ms Beats 94.44% Memory 45.3 MB Beats 50%

const calculateTax = (brackets: number[][], income: number): number => {
  let result = 0

  brackets.forEach((el, i, arr) => {
    if (!income) return

    const currVal = el[0] - (i > 0 ? arr[i - 1][0] : 0)
    let currIncome: number

    if (currVal < income) {
      income -= currVal
      currIncome = currVal
    } else {
      currIncome = income
      income = 0
    }

    if (currIncome < 0) return

    result += currIncome * el[1] / 100
  })

  return result
}

// more short and fast
// Runtime  54 ms  Beats  100%  Memory  45.3 MB  Beats  50%

const calculateTax2 = (brackets: number[][], income: number): number => {
  let result = 0

  brackets.forEach((el, i, arr) => {
    const currVal = el[0] - (i > 0 ? arr[i - 1][0] : 0)
    let currIncome = currVal < income ? currVal : income
    income = currVal < income ? income - currVal : 0

    result += currIncome * el[1] / 100
  })

  return result
}
