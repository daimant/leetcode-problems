/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function(head) {
  let count = 0;
  let list = head;

  while (list) {
    count++;
    list = list.next;
  }

  for (let i = 0; i < ~~(count / 2); i++) head = head.next;

  return head;
};
