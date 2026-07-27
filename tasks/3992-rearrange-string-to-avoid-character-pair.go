// Accepted 999 / 999 testcases passed Sergey Pomortsev submitted at Jul 27, 2026 17:47
// Solution Runtime 0 ms Beats 100.00% Memory 5.14 MB Beats 12.78%

func rearrangeString(s string, x byte, y byte) string {
  sl := strings.Split(s, "")

  for true {
    isChanged := false

    for i := 0; i < len(sl) - 1; i++ {
      if sl[i] == string(x) && sl[i + 1] != string(x) {
        sl[i], sl[i + 1] = sl[i + 1], sl[i]
        isChanged = true
      }
    }

    if !isChanged {
      break
    }
  }

  return strings.Join(sl, "")
}