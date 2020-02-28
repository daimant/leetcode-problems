"use strict";

//var getDecimalValue = function(head) {
//    let num = head.join("");
//    return parseInt(+num, 2);
//};

console.log(getDecimalValue([1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0])); //18880
console.log(getDecimalValue([1, 0, 1])); //5
console.log(getDecimalValue([0])); //0
console.log(getDecimalValue([1])); //1
console.log(getDecimalValue([0, 0])); //0

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  console.log(JSON.stringify(head));

  if (!head) {
    return 0;
  }

  let str = "" + head.val;

  while (head.next) {
    head = head.next;
    str += head.val;
  }

  console.log(str);
  return parseInt(str, 2);
};
