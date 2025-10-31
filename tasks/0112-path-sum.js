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
 * @param {number} sum
 * @param acc
 * @return {boolean}
 */
var hasPathSum = function(root, sum, acc = 0) {
  if (!root) return false;
  if (!root.left && !root.right) return acc + root.val === sum;
  return (
    hasPathSum(root.left, sum, acc + root.val) ||
    hasPathSum(root.right, sum, acc + root.val)
  );
};
