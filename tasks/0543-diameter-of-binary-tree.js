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
const diameterOfBinaryTree = function(root) {
  if (!root) return 0;

  const open = tree => {
    const left = tree.left ? open(tree.left) : 0;
    const right = tree.right ? open(tree.right) : 0;
    if (left + right > maxDeep) maxDeep = left + right;

    return left > right ? left + 1 : right + 1;
  };

  let maxDeep = 0;
  open(root);

  return maxDeep;
};
