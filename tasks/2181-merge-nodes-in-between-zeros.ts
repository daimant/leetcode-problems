// Accepted
// Runtime 360 ms Beats 100.00%
// Memory 96.92 MB Beats 65.00%

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
