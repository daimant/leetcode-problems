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
 * @param count
 * @return {boolean}
 */
var isBalanced = function(root, count = 1) {
  if (!root) return true;

  const left = root.left ? isBalanced(root.left, count + 1) : count;
  const right = root.right ? isBalanced(root.right, count + 1) : count;

  if (left === false || right === false) return false;

  return Math.abs(right - left) > 1 ? false : Math.max(right, left);
};
