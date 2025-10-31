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
 * @return {number}
 */
var minDepth = function(root, count = 1) {
  if (!root) return 0;
  if (!root.left && !root.right) return count;
  if (root.left && root.right)
    return Math.min(
      minDepth(root.right, count + 1),
      minDepth(root.left, count + 1)
    );
  if (!root.left) return minDepth(root.right, count + 1);
  if (!root.right) return minDepth(root.left, count + 1);
};
