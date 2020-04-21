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
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head) return false;
  let list = head;

  let arr = new Set();

  while (list.next) {
    if (arr.has(list)) return true;
    arr.add(list);
    list = list.next;
  }

  return false;
};
