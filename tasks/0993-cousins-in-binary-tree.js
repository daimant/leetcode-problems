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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  let xParent, yParent, xDeep, yDeep;

  const open = (tree, parent = null, deep = 0) => {
    if (!tree) return;

    if (parent !== null) {
      if (tree.val === x) {
        xParent = parent;
        xDeep = deep;
      }
      if (tree.val === y) {
        yParent = parent;
        yDeep = deep;
      }
    }

    if (tree.left) open(tree.left, tree.val, deep + 1);
    if (tree.right) open(tree.right, tree.val, deep + 1);
  };

  open(root);
  return (
    isFinite(xParent) &&
    isFinite(yParent) &&
    xParent !== yParent &&
    xDeep === yDeep
  );
};
