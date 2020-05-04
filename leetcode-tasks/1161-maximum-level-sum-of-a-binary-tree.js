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
var maxLevelSum = function(root) {
  let table = new Map(),
    maxLevel,
    maxValue = -Infinity;

  open(root);

  for (let val of table) {
    if (val[1] > maxValue) {
      maxValue = val[1];
      maxLevel = val[0];
    }
  }
  return maxLevel;

  function open(root, level = 1) {
    if (!root) return;

    if (table.has(level)) {
      const currGet = table.get(level) + root.val;
      table.set(level, currGet);
    } else if (!table.has(level)) {
      table.set(level, root.val);
    }

    open(root.left, level + 1);
    open(root.right, level + 1);
  }
};
