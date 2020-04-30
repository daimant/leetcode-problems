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
 * @param {number[]} arr
 * @return {boolean}
 */
var isValidSequence = function(root, arr) {
  let isValid = false;
  const len = arr.length - 1;

  const open = (tree, level = 0) => {
    if (!tree || arr[level] !== tree.val || level > len) return;
    if (tree.val === arr[level] && level === len && !tree.left && !tree.right)
      isValid = true;

    if (tree.left) open(tree.left, level + 1);
    if (tree.right) open(tree.right, level + 1);
  };

  open(root);
  return isValid;
};
