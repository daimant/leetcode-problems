"use strict";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let a = "",
    b = "",
    c = "",
    result = null;

  while (l1) {
    a = l1.val + a;
    l1 = l1.next;
  }
  while (l2) {
    b = l2.val + b;
    l2 = l2.next;
  }

  c = (BigInt(a) + BigInt(b)).toString();

  for (let i = 0; i < c.length; i++) {
    const buff = result;
    result = new ListNode(c[i]);
    result.next = buff;
  }

  return result;
};
