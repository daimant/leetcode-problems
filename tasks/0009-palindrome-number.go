// Accepted 11511 / 11511 testcases passed Sergey Pomortsev submitted at Jul 13, 2026 12:53
// Runtime 0 ms Beats 100.00% Memory 6.23 MB Beats 26.74%

func isPalindrome(x int) bool {
  str := strconv.Itoa(x)

  for i := 0; i < len(str) / 2; i++ {
    if str[i] != str[len(str) - i - 1] {
      return false
    }
  }

  return true
}