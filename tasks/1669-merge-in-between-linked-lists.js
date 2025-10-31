/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeInBetween = function(list1, a, b, list2) {
  const head1 = list1;
  const head2 = list2;
  let count = 1;
  let x;
  let y;

  while (list1) {
    if (count === a) x = list1;
    if (count === b) {
      y = list1.next.next;
      break;
    }

    list1 = list1.next;
    count++;
  }

  while (list2) {
    if (!list2.next) {
      list2.next = y;
      break;
    }

    list2 = list2.next;
  }

  x.next = head2;

  return head1;
};
