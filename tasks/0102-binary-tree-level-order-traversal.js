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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let table = new Map();
  let count = 0;

  const open = (tree, count) => {
    if (!tree) return;

    count++;

    if (table.has(count)) {
      table.set(count, [...table.get(count), tree.val]);
    } else table.set(count, [tree.val]);

    if (tree.left) open(tree.left, count);
    if (tree.right) open(tree.right, count);
  };

  open(root, count);

  return [...table.values()];
};
