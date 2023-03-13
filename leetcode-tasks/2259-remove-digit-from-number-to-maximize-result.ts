// Runtime 55 ms Beats 94.12% Memory 45.2 MB Beats 47.6%

const removeDigit = (number: string, digit: string): string => {
  let result = ''

  for (let i = 0; i < number.length; i++) {
    if (number[i] !== digit) continue
    const currNum = `${number.slice(0, i)}${number.slice(i + 1)}`
    if (currNum > result) result = currNum
  }

  return result
}
