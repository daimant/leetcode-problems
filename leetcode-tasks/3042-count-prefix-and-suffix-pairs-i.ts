// Wrong Answer 204 / 594 testcases passed

const countPrefixSuffixPairs = (words: string[]): number => {
  let result = 0

  for (let i = 0; i < words.length - 1; i++) {
    for (let j = i; j < words.length; j++) {
      if (words[i].length < words[j].length) result += isPrefixAndSuffix(words[i], words[j])
    }
  }

  return result
}

const isPrefixAndSuffix = (str1: string, str2: string) => str2.slice(0, str1.length) === str1 && str2.slice(str2.length - str1.length) === str1 ? 1 : 0
