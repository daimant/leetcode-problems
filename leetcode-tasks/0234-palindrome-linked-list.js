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
var isPalindrome = function(head) {
  let arr = [];

  while (head) {
    if (head.val !== null) {
      arr.push(head.val);
    }
    head = head.next;
  }

  return JSON.stringify(arr) === JSON.stringify(arr.reverse());
};
