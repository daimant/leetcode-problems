"use strict";

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
var reverseList = function(head) {
  let list = null,
    next;

  while (head) {
    next = list;
    list = new ListNode(head.val);
    list.next = next;
    head = head.next;
  }

  return list;
};
