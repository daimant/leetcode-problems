// Runtime 56 ms Beats 97.73% Memory 45 MB Beats 20.45%

const minMaxDifference = (num: number): number => {
  let min = Infinity
  let max = -Infinity

  for (let i = 0; i < 10; i++) {
    const currRegExp = new RegExp(`${i}`, 'gi')
    const maxNum = +`${num}`.replace(currRegExp, '9')
    const minNum = +`${num}`.replace(currRegExp, '0')

    if (maxNum > max) max = maxNum
    if (minNum < min) min = minNum
  }

  return max - min
}
