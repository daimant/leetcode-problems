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

// optimized solution
// Accepted
// Runtime 54 ms Beats 95.12% of users with TypeScript
// Memory 52.05 MB Beats 42.07% of users with TypeScript

const maxFrequencyElements2 = (nums: number[]): number => {
  const frequenciesMap = new Map()
  let maxFreq = 0

  for (let i = 0; i < nums.length; i++) {
    const get = frequenciesMap.get(nums[i]) + 1 || 1
    if (maxFreq < get) maxFreq = get

    frequenciesMap.set(nums[i], get)
  }

  return Array.from(frequenciesMap).filter(el => el[1] === maxFreq).length * maxFreq
}