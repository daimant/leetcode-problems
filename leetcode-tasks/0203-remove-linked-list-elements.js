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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) return false;
  let list = null,
    arr = [];

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  while (arr.length) {
    if (arr[arr.length - 1] === val) {
      arr.pop();
      continue;
    }
    const next = list;
    list = new ListNode(arr.pop());
    list.next = next;
  }

  return list;
};
