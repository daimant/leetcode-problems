"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function(root) {
  let max = -Infinity;
  open(root);
  return max;

  function open(tree) {
    const left = tree.left ? open(tree.left) : 0,
      right = tree.right ? open(tree.right) : 0,
      curr = Math.max(
        right + left + tree.val,
        tree.val,
        tree.val + left,
        tree.val + right
      );

    if (curr > max) max = curr;
    return Math.max(tree.val, tree.val + left, tree.val + right);
  }
};
