// Accepted 625 / 625 testcases passed Sergey Pomortsev submitted at Jul 27, 2026 17:57
// Solution Runtime 0 ms Beats 100.00% Memory 7.17 MB Beats 10.06%

func createGrid(m int, n int) []string {
  result := make([]string, m)

  for i := 0; i < m; i++ {
    for j := 0; j < n; j++ {
      if i == 0 || j == n - 1 {
        result[i] += "."
      } else {
        result[i] += "#"
      }
    }
  }

  return result
}