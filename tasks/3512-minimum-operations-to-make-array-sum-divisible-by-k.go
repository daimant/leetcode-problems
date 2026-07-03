// Accepted 855 / 855 testcases passed Sergey Pomortsev submitted at Jul 02, 2026 10:54
// Solution Runtime 0 ms Beats 100.00% Memory 8.50 MB Beats 49.54%

func minOperations(nums []int, k int) int {
  var sum int

  for _, num := range nums {
    sum += num
  }

  return sum % k
}