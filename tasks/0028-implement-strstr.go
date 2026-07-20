// Accepted 85 / 85 testcases passed Sergey Pomortsev submitted at Jul 14, 2026 21:20
// Solution Runtime 0 ms Beats 100.00% Memory 4.00 MB Beats 80.51%

func strStr(a string, b string) int {
  Outer: for i := 0; i <= len(a) - len(b); i++ {
    for j := 0; j < len(b); j++ {
      if b[j] != a[i + j] {
        continue Outer
      }
    }
    return i
  }

  return -1
}