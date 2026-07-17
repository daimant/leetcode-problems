// Accepted 1569 / 1569 testcases passed Sergey Pomortsev submitted at Jul 15, 2026 22:09
// Runtime 0 ms Beats 100.00% Memory 6.73 MB Beats 5.37%

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
  var l1Str, l2Str string

  for link := l1; link != nil; link = link.Next {
    l1Str = strconv.Itoa(link.Val) + l1Str
  }

  for link := l2; link != nil; link = link.Next {
    l2Str = strconv.Itoa(link.Val) + l2Str
  }

  bigL1Int, _ := new(big.Int).SetString(l1Str, 10)
  bigL2Int, _ := new(big.Int).SetString(l2Str, 10)
  l3Str := new(big.Int).Add(bigL1Int, bigL2Int).String()
  list := &ListNode{Val: 0, Next: nil}
  link := list

  for i := len(l3Str) - 1; i >= 0; i-- {
    v, _ := strconv.Atoi(string(l3Str[i]))
    
    var next *ListNode = nil
    if (i != 0) {
      next = &ListNode{Val: 0, Next: nil}
    }
    
    link.Val = v
    link.Next = next
    link = link.Next
  }

  return list
}