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
 * @param parent
 * @return {boolean}
 */
var isUnivalTree = function(root, parent = root.val) {
  return (
    root.val === parent &&
    (!root.left || isUnivalTree(root.left, root.val)) &&
    (!root.right || isUnivalTree(root.right, root.val))
  );
};
