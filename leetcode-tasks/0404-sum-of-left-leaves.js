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
 * @param isLeft
 * @return {number}
 */
var sumOfLeftLeaves = function(root, isLeft = 0) {
  if (!root) return 0;
  if (isLeft && !root.left && !root.right) return root.val;
  return sumOfLeftLeaves(root.left, 1) + sumOfLeftLeaves(root.right);
};
