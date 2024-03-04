// Accepted
// Runtime 79 ms Beats 61.06% of users with TypeScript
// Memory 56.19 MB Beats 5.24% of users with TypeScript

const maximumOddBinaryNumber = (s: string): string => {
  const oneCount = s.split('').filter(el => el === '1').length
  let max = [...Array(oneCount).fill('1'), ...Array(s.length - oneCount).fill('0')]

  while (max[0] !== '0') {
    const currMax = BigInt(`0b${max.join('')}`)
    const start = max.indexOf('0') - 1
    const end = max.lastIndexOf('0')

    if (currMax % BigInt('2') || start - 1 === end || start === end) return max.join('')

    max.splice(start, 1, '0')
    max.splice(end, 1, '1')
  }

  return max.join('')
}

// Accepted
// Runtime 67 ms Beats 95.02% of users with TypeScript
// Memory 56.10 MB Beats 5.24% of users with TypeScript

const maximumOddBinaryNumber2 = (s: string): string => {
  const oneCount = s.split('').filter(el => el === '1').length
  let max = [...Array(oneCount).fill('1'), ...Array(s.length - oneCount).fill('0')]

  let start = max.indexOf('0')
  let end = max.lastIndexOf('0') - 1

  while (max[0] !== '0') {
    if (BigInt(`0b${max.join('')}`) % BigInt('2')) return max.join('')

    start--
    end++

    max.splice(start, 1, '0')
    max.splice(end, 1, '1')
  }

  return max.join('')
};