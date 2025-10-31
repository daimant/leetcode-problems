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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  if (!root) return [];
  let table = new Map();

  const open = (tree, count = 1) => {
    if (table.has(count))
      table.set(count, [
        table.get(count)[0] + tree.val,
        table.get(count)[1] + 1
      ]);
    if (!table.has(count)) table.set(count, [tree.val, 1]);

    if (tree.left) open(tree.left, count + 1);
    if (tree.right) open(tree.right, count + 1);
  };

  open(root);

  return [...table.values()].map(el => el[0] / el[1]);
};
