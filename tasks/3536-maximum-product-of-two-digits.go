// Accepted 1088 / 1088 testcases passed Sergey Pomortsev submitted at Jul 02, 2026 15:21
// Runtime 0 ms Beats 100.00% Memory 4.02 MB Beats 60.87%

import "strconv"

func maxProduct(n int) int {
  var str = strconv.Itoa(n)
  var max int
  var max2 int

  for _, r := range str {
    var num = int(r - '0')

    if num >= max {
      max2 = max
      max = num
    } else if num < max && num > max2 {
      max2 = num
    }
  }

  return max * max2
}