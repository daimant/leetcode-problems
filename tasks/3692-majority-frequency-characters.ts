// Accepted 707 / 707 testcases passed Sergey Pomortsev submitted at Oct 23, 2025 16:27
// Solution Runtime 2 ms Beats 100.00% Analyze Complexity Memory 59.93 MB Beats 67.47%

const majorityFrequencyGroup = (s: string): string => {
  const freqs = new Map<string, number>()

  s.split('').forEach(el => {
    freqs.set(el, (freqs.has(el) ? freqs.get(el) : 0) + 1)
  })

  const massiveFreqs = new Map<number, string>()
  let mostMassiveFreq = 0
  let indexMostMassiveFreq: number[] = []

  Array.from(freqs).forEach(el => {
    const currElements = (massiveFreqs.has(el[1]) ? massiveFreqs.get(el[1]) : '') + el[0]
    if (currElements.length > mostMassiveFreq) {
      mostMassiveFreq = currElements.length
      indexMostMassiveFreq = [el[1]]
    } else if (currElements.length === mostMassiveFreq) indexMostMassiveFreq.push(el[1])

    massiveFreqs.set(el[1], currElements)
  })

  return massiveFreqs.get(indexMostMassiveFreq.sort((a, b) => b - a)[0])
}