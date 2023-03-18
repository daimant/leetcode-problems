// 98 / 121 testcases passed

const digitSum = (s: string, k: number): string => {
  const strArr = s.split('').map(el => +el)

  while (strArr.length > k) {
    for (let i = 0; i < strArr.length; i++) {
      strArr[i] = [strArr[i], ...strArr.splice(i + 1, k - 1)].reduce((acc, curr) => acc + curr)
    }
  }

  return strArr.join('')
}
