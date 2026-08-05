// Accepted 921 / 921 testcases passed Sergey Pomortsev submitted at Jul 03, 2026 18:44
// Runtime 0 ms Beats 100.00% Memory 5.20 MB Beats 98.02%

func recoverOrder(order []int, friends []int) []int {
  var uniq = make(map[int]struct{})
  var result = []int{}

  for _, val := range friends {
    uniq[val] = struct{}{}
  }

  for _, val := range order {
    if _, ok := uniq[val]; ok {
      result = append(result, val)
    }
  }

  return result
}