// Accepted 706 / 706 testcases passed Sergey Pomortsev submitted at Oct 23, 2025 18:08
// Solution Runtime 7 ms Beats 77.78% Analyze Complexity Memory 62.05 MB Beats 48.15%

const hasSameDigits = (s: string): boolean => {
  let oldArr = s.split('').map(el => Number(el))
  let newArr = []

  while (oldArr.length !== 2) {
    for (let i = 0; i < oldArr.length - 1; i++) {
      newArr.push((oldArr[i] + oldArr[i + 1]) % 10)
    }

    oldArr = [...newArr]
    newArr = []
  }

  return oldArr[0] === oldArr[1]
}

// Added optimized solution
// Accepted 706 / 706 testcases passed Sergey Pomortsev submitted at Oct 24, 2025 14:13
// Solution Runtime 7 ms Beats 79.31% Analyze Complexity Memory 60.58 MB Beats 72.41%

const hasSameDigits2 = (s: string): boolean => {
  let oldStr = s

  while (oldStr.length !== 2) {
    let newStr = ''

    for (let i = 0; i < oldStr.length - 1; i++) {
      newStr += String((+oldStr[i] + +oldStr[i + 1]) % 10)
    }

    oldStr = newStr
  }

  return oldStr[0] === oldStr[1]
}