"use strict";

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return;
  let lists = new Set();

  while (headA) {
    lists.add(headA);
    headA = headA.next;
  }

  while (headB) {
    if (lists.has(headB)) return headB;
    headB = headB.next;
  }
};
