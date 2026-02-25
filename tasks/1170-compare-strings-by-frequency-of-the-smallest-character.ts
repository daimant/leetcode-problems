// Accepted 37 / 37 testcases passed Sergey Pomortsev submitted at Feb 24, 2026 16:06
// Solution Runtime 11 ms Beats 100.00% Analyze Complexity Memory 60.12 MB Beats 100.00%

function getWeight(str: string) {
  let letter = 'zz'
  let count = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] < letter) {
      letter = str[i]
      count = 1
    } else if (str[i] === letter) count++
  }

  return count
}

function numSmallerByFrequency(queries: string[], words: string[]): number[] {
  const accWeights = new Map<string, number>()
  const accDiffs = new Map<number, number>()
  const wordsWeights = []
  const result = []

  for (let i = 0; i < words.length; i++) {
    if (accWeights.has(words[i])) wordsWeights.push(accWeights.get(words[i]))
    else {
      const newWeight = getWeight(words[i])
      wordsWeights.push(newWeight)
      accWeights.set(words[i], newWeight)
    }
  }

  for (let i = 0; i < queries.length; i++) {
    let currWeight = 0

    if (accWeights.has(queries[i])) currWeight = accWeights.get(queries[i])
    else {
      currWeight = getWeight(queries[i])
      accWeights.set(queries[i], currWeight)
    }

    let currDiff = 0

    if (accDiffs.has(currWeight)) currDiff = accDiffs.get(currWeight)
    else {
      currDiff = wordsWeights.filter(el => el > currWeight).length
      accDiffs.set(currWeight, currDiff)
    }

    result.push(currDiff)
  }

  return result
};