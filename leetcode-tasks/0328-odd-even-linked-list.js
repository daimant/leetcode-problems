/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function(head) {
  let odd = new ListNode(),
    even = new ListNode(),
    oHead = odd,
    eHead = even;

  for (let i = 1; head; i++) {
    if (i % 2) {
      odd.next = head;
      odd = odd.next;
    } else {
      even.next = head;
      even = even.next;
    }
    head = head.next;
  }

  even.next = null;
  odd.next = eHead.next;

  return oHead.next;
};
