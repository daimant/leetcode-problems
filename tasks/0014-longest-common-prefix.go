// Accepted 126 / 126 testcases passed Sergey Pomortsev submitted at Jul 13, 2026 13:26
// Solution Runtime 0 ms Beats 100.00% Memory 4.27 MB Beats 57.35%

func longestCommonPrefix(strs []string) string {
  maxPref := ""

  for i, symb := range strs[0] {
    for j := 1; j < len(strs); j++ {
      if i == len(strs[j]) || rune(strs[j][i]) != symb {
        return maxPref
      }
    }

    maxPref += string(symb)
  }

  return maxPref
}