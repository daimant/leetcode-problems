// Accepted
// Runtime 68 ms Beats 100.00% of users with JavaScript
// Memory 41.55 MB Beats 100.00% of users with JavaScript

var isPalindrome = function(head) {
  let arr = [];

  while (head) {
    if (head.val !== null) {
      arr.push(head.val);
    }
    head = head.next;
  }

  return JSON.stringify(arr) === JSON.stringify(arr.reverse());
}