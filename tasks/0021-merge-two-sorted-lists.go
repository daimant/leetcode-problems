// Accepted 208 / 208 testcases passed Sergey Pomortsev submitted at Jul 15, 2026 11:45
// Solution Runtime 0 ms Beats 100.00% Memory 4.30 MB Beats 98.77% Code
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func mergeTwoLists(list1 *ListNode, list2 *ListNode) *ListNode {
  if (list1 == nil) {
    return list2
  } else if (list2 == nil) {
    return list1
  }

  link1 := list1
  link2 := list2

  if list2.Val < list1.Val {
    link1 = list2
    link2 = list1
  }

  for ;link1 != nil && link2 != nil; link1 = link1.Next {
    if link1.Val <= link2.Val && (link1.Next == nil || link2.Val < link1.Next.Val) {
      temp := link2.Next
      link2.Next = link1.Next
      link1.Next = link2
      link2 = temp
    }
  }

  if list2.Val < list1.Val {
    return list2
  }
  return list1
}