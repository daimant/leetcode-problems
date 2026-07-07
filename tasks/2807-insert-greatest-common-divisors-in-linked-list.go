// Accepted 582 / 582 testcases passed Sergey Pomortsev submitted at Jul 03, 2026 13:13
//  Solution Runtime 0 ms Beats 100.00% Memory 8.12 MB Beats 60.71%

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func insertGreatestCommonDivisors(head *ListNode) *ListNode {
  for link := head; link.Next != nil; link = link.Next.Next {
    var currGreat int
    var temp1 = max(link.Val, link.Next.Val)
    var temp2 = min(link.Val, link.Next.Val)

    for {
      var temp3 = temp1 % temp2

      if temp3 == 0 {
        currGreat = temp2
        break
      } else {
        temp1 = temp2
        temp2 = temp3
      }
    }

    link.Next = &ListNode{Val: currGreat, Next: link.Next}
  }

  return head
}