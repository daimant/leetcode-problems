// Accepted 805 / 805 testcases passed Sergey Pomortsev submitted at Jun 30, 2026 22:50
// Runtime 0 ms Beats 100.00% Memory 4.34 MB Beats 82.61%

import "math"

func maxDifference(s string) int {
  var freqs = make(map[rune]int)
  var maxOdd = 0
  var smallestEven = math.MaxInt

  for _, char := range s {
    if _, ok := freqs[char]; ok {
      freqs[char]++
    } else {
      freqs[char] = 1
    }
  }

  for _, freq := range freqs {
    if freq % 2 != 0 && freq > maxOdd {
      maxOdd = freq
    } else if freq % 2 == 0 && freq < smallestEven {
      smallestEven = freq
    }
  }

  return maxOdd - smallestEven
}
