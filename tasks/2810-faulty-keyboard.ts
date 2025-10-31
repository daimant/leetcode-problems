// Accepted
// Runtime 96 ms Beats 91.67%
// Memory 58.49 MB Beats 50.00%

const finalString = (s: string): string => {
  let arr = s.split('')

  for (let i = 0; i < arr.length;) {
    if (arr[i] === 'i') {
      arr.splice(0, i + 1, ...arr.slice(0, i).reverse()).splice(i, 1)
      i--
    } else i++
  }

  return arr.join('')
}
