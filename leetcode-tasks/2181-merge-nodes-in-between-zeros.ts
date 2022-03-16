/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number
  next: ListNode | null

  constructor (val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

const mergeNodes = (head: ListNode | null): ListNode | null => {
  let list = head
  let startZero = null

  while (list) {
    if (list.val)
      startZero.val += list.val
    else {
      if (list !== head)
        startZero.next = list
      if (list.next === null)
        startZero.next = null

      startZero = list
    }

    list = list.next
  }

  return head
};

// Runtime: 532 ms, faster than 94.59% of TypeScript online submissions for Merge Nodes in Between Zeros.
// Memory Usage: 88 MB, less than 100.00% of TypeScript online submissions for Merge Nodes in Between Zeros.
