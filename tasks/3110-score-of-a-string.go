// Accepted 705 / 705 testcases passed Sergey Pomortsev submitted at Jul 03, 2026 15:22
// Runtime 0 ms Beats 100.00% Memory 3.99 MB Beats 84.21%

func scoreOfString(s string) int {
  var result float64

  for i := 0; i < len(s) - 1; i++ {
    result += math.Abs(float64(int(s[i]) - int(s[i + 1])))
  }

  return int(result)
}