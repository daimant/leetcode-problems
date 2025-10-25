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