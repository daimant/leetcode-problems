// Accepted 127 / 127 testcases passed Sergey Pomortsev submitted at Jul 28, 2026 20:19
// Runtime 0 ms Beats 100.00% Memory 4.14 MB Beats 93.33%

func countElements(nums []int) int {
  var countMin, countMax int
  var min = int(math.Pow(10, 5))
  var max = -min

  for _, v := range nums {
    if v < min {
      min = v
      countMin = 1
    } else if v == min {
      countMin++
    }

    if v > max {
      max = v
      countMax = 1
    } else if v == max {
      countMax++
    }
  }

  if min == max {
    return 0
  }
  return len(nums) - countMin - countMax
}