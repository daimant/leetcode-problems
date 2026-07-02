// Accepted 826 / 826 testcases passed Sergey Pomortsev submitted at Jun 30, 2026 22:14
// Runtime 0 ms Beats 100.00% Memory 4.82 MB Beats 6.67%

import "strings"
import "fmt"
import "strconv"

func findValidPair(s string) string {
  var countReps = make(map[string]int)
  var strs = strings.Split(s, "")
  var acc = ""

  for _, val := range strs {
    if _, ok := countReps[val]; ok {
      countReps[val]++
    } else {
      countReps[val] = 1
    }
  }

  for i, val := range strs {
    var curr = countReps[val]
    var numVal, _ = strconv.Atoi(val)

    if numVal == curr {
      if len(acc) == 1 && strs[i - 1] == acc && val != acc{
        return acc + val
      } else {
        acc = val
      }
    }
  }

  return ""
}
