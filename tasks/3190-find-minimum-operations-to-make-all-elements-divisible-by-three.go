// Accepted 660 / 660 testcases passed Sergey Pomortsev submitted at Jul 05, 2026 13:07
// Runtime 0 ms Beats 100.00% Memory 4.24 MB Beats 13.46%

func minimumOperations(nums []int) int {
  var count int

  for _, num := range nums {
    if num % 3 != 0 {
      count++
    }
  }

  return count
}