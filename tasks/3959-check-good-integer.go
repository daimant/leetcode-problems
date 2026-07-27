// Accepted 901 / 901 testcases passed Sergey Pomortsev submitted at Jul 24, 2026 17:21
// Runtime 0 ms Beats 100.00% Memory 4.07 MB Beats 22.67%

func checkGoodInteger(n int) bool {
  str := strconv.Itoa(n)
  sum := 0
  sq := 0

  for _, v := range str {
    curr := int(v - '0')
    sum += curr
    sq += curr * curr
  }

  return sq - sum >= 50
}