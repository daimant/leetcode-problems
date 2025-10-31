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

// Runtime 52 ms Beats 100% Memory 45.2 MB Beats 23.8%

const digitSum2 = (s: string, k: number): string => {
  let strArr = s.split('').map(el => el)

  while (strArr.length > k) {
    const newArr = []
    for (let i = 0; i < strArr.length; i += k) {
      const currNum = strArr.slice(i, i + k).reduce((acc, curr) => acc + +curr, 0)
      newArr.push(...String(currNum).split(''))
    }
    strArr = newArr
  }

  return strArr.join('')
}
