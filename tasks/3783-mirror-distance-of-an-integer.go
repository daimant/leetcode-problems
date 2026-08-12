// Accepted 999 / 999 testcases passed Sergey Pomortsev submitted at Jul 02, 2026 16:43
// Runtime 0 ms Beats 100.00% Memory 4.12 MB Beats 2.38%

func mirrorDistance(n int) int {
  var strs = strconv.Itoa(n)
  var revStr string

  for _, str := range strs {
    revStr = string(str) + revStr
  }

  var revInt, _ = strconv.Atoi(revStr)
  return int(math.Abs(float64(n - revInt)))
}