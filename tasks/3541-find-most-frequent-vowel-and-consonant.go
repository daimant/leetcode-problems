// Accepted 812 / 812 testcases passed Sergey Pomortsev submitted at Jul 12, 2026 10:33
// Runtime 0 ms Beats 100.00% Memory 4.41 MB Beats 13.33%

func maxFreqSum(s string) int {
  var vowels = map[string]struct{}{"a": {}, "e": {}, "i": {}, "o": {}, "u": {}}
  var collection = make(map[string]int)
  var maxFreqVowels, maxFreqConsonant int

  for _, symbRune := range s {
    var symb = string(symbRune)
    if _, ok := collection[symb]; ok {
      collection[symb] += 1
    } else {
      collection[symb] = 1
    }
  }

  for key, freq := range collection {
    var _, isVowel = vowels[key]
    if isVowel && maxFreqVowels < freq {
      maxFreqVowels = freq
    } else if !isVowel && maxFreqConsonant < freq {
      maxFreqConsonant = freq
    }
  }

  return maxFreqVowels + maxFreqConsonant
}