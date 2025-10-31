const getLeastFrequentDigit = (n: number): number => {
  const str = String(n)
  const freq = new Map()

  for (let i = 0; i < str.length; i++) {
    freq.set(str[i], (freq.has(str[i]) ? freq.get(str[i]) : 0) + 1)
  }

  const freqArr = Array.from(freq)
  let smallestFreq = 2 ** 31
  let smallestNum = 10

    for (let i = 0; i < freqArr.length; i++) {
      if (freqArr[i][1] < smallestFreq) {
        smallestFreq = freqArr[i][1]
        smallestNum = freqArr[i][0]
      } else if (freqArr[i][1] === smallestFreq && smallestNum > freqArr[i][0]) smallestNum = freqArr[i][0]
    }

  return Number(smallestNum)
}