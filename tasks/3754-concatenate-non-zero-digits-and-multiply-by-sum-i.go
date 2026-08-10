// Accepted 954 / 954 testcases passed Sergey Pomortsev submitted at Jul 07, 2026 11:54
// Solution Runtime 0 ms Beats 100.00% Memory 4.03 MB Beats 34.78%

func sumAndMultiply(n int) int64 {
  var nStr = strconv.Itoa(n)
  var sumStr string
  var sumInt int

  for _, num := range nStr {
    var currStr = string(num)
    var currInt, _ = strconv.Atoi(currStr)
    
    if currInt > 0 {
      sumStr += string(currStr)
      sumInt += currInt
    }
  }

  var convSumStr, _ = strconv.Atoi(sumStr)
  return int64(convSumStr * sumInt)
}