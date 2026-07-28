// Accepted 1000 / 1000 testcases passed Sergey Pomortsev submitted at Jul 02, 2026 15:44
//  Solution Runtime 0 ms Beats 100.00% Memory 4.10 MB Beats 9.71%

import "strconv"

func digitFrequencyScore(n int) int {
  var freq = make(map[rune]int)
  var str = strconv.Itoa(n)
  var result int

  for _, symb := range str {
    freq[symb]++
  }

  for r, num := range freq {
    result += num * int(r - '0')
  }

  return result
}