// Accepted
// Runtime 60 ms Beats 87.19% of users with TypeScript
// Memory 51.86 MB Beats 48.17% of users with TypeScript

const maxFrequencyElements = (nums: number[]): number => {
  const frequenciesMap = new Map()
  const maxFreqEls = new Set()
  let maxFreq = 0

  nums.forEach((el) => {
    const get = frequenciesMap.get(el) + 1 || 1
    if (maxFreq < get) {
      maxFreq = get
      maxFreqEls.clear()
      maxFreqEls.add(el)
    } else if (maxFreq === get) maxFreqEls.add(el)

    frequenciesMap.set(el, get)
  })

  return maxFreqEls.size * maxFreq
}