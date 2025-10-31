// Accepted
// Runtime 45 ms Beats 96.20%
// Memory 50.23 MB Beats 39.66%

class Calculator {
  result

  constructor(value: number) {
    this.result = value
  }

  add(value: number): Calculator {
    this.result += value
    return this
  }

  subtract(value: number): Calculator {
    this.result -= value
    return this
  }

  multiply(value: number): Calculator {
    this.result *= value
    return this
  }

  divide(value: number): Calculator {
    this.result = value ? this.result / value : "Division by zero is not allowed"
    return this
  }

  power(value: number): Calculator {
    this.result = this.result ** value
    return this
  }

  getResult(): number {
    return this.result
  }
}
