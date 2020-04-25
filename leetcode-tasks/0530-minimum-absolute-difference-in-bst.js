"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  let arr = [],
    willOpen = [root],
    diff = 2147483647;
  if (!root) return diff;

  do {
    const stick = willOpen.shift();

    arr.push(stick.val);
    if (stick.left) willOpen.push(stick.left);
    if (stick.right) willOpen.push(stick.right);
  } while (willOpen.length);

  arr.sort((a, b) => (a < b ? 1 : -1));

  for (let i = 0, len = arr.length; i < len - 1; i++) {
    const currDiff = arr[i] - arr[i + 1];
    if (currDiff < diff) diff = currDiff;
  }

  return diff;
};
