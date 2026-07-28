// Accepted 505 / 505 testcases passed Sergey Pomortsev submitted at Jul 28, 2026 19:42
// Runtime 0 ms Beats 100.00% Memory 4.08 MB Beats 43.48%

func largestInteger(n int, s int) int {
  if s == 0 {
    return 0
  }

  str := ""

  for s > 0 {
    if s >= 9 {
      str += "9"
      s -= 9
    } else {
      str += strconv.Itoa(s)
      break
    }
  }

  if len(str) > n {
    return -1
  }

  for i := len(str); i < n; i++ {
    str += "0"
  }

  v, _ := strconv.Atoi(str)
  return v
}