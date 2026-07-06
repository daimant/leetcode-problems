// Accepted 737 / 737 testcases passed Sergey Pomortsev submitted at Jul 05, 2026 13:04
// Runtime 0 ms Beats 100.00% Memory 4.16 MB Beats 36.84%

func differenceOfSums(n int, m int) int {
  var div int
  var nonDiv int

  for i := 1; i <= n; i++ {
    if i % m != 0 {
      div += i
    } else {
      nonDiv += i
    }
  }

  return div - nonDiv
}