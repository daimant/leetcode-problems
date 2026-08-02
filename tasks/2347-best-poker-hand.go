// Accepted 98 / 98 testcases passed Sergey Pomortsev submitted at Jul 29, 2026 16:24
// Runtime 0 ms Beats 100.00% Memory 3.84 MB Beats 60.00%

func bestHand(r []int, s []byte) string {
  if s[0] == s[1] && s[1] == s[2] && s[2] == s[3] && s[3] == s[4] {
    return "Flush"
  }

  max := 0
  mapa := map[int]int{}

  for i := 0; i < 5; i++ {
    mapa[r[i]]++

    if mapa[r[i]] > max {
      max = mapa[r[i]]
    }
  }

  if max >= 3 {
    return "Three of a Kind"
  } else if max == 2 {
    return "Pair"
  } else {
    return "High Card"
  }
}