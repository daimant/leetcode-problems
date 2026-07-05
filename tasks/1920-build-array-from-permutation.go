// Accepted 140 / 140 testcases passed Sergey Pomortsev submitted at Jul 03, 2026 22:20
// Runtime 0 ms Beats 100.00% Memory 8.58 MB Beats 17.37%

func buildArray(nums []int) []int {
  var result = make([]int, len(nums))

  for i, val := range nums {
    result[i] = nums[val]
  }

  return result
}