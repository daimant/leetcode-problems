// 30 / 280 testcases passe

const fillCups = (amount: number[]): number => {
  let result = 0
  let [a, b, c] = amount

  while (a < amount[0] * 2 || b < amount[1] * 2 || c < amount[2] * 2) {
    let value = 2

    if (value && a < amount[0] * 2) {
      a++
      value--
    }

    if (value && b < amount[1] * 2) {
      b++
      value--
    }

    if (value && c < amount[2] * 2) {
      c++
      value--
    }

    result++
  }

  return result
}

// 30 / 280 testcases passe

const fillCups2 = (amount: number[]): number => {
  let result = 0

  while (amount[0] !== amount[1] || amount [1] !== amount[2]) {
    amount.sort((a, b) => a - b)

    if (amount[0] === amount[1] || amount[0] === amount[1] - 1) {
      amount[0]++
      amount[1]++
    } else amount[0] += 2

    result++
  }

  return result
}
