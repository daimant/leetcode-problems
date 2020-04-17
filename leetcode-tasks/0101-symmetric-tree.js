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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;
  let table = new Map();

  open(root, 0, table);

  return ![...table.values()]
    .map(el => (el.toString() === el.reverse().toString() ? 1 : 0))
    .includes(0);
};

const open = (tree, count, table) => {
  count++;

  if (table.has(count)) {
    table.set(count, [...table.get(count), tree.val]);
  } else table.set(count, [tree.val]);

  if (tree.left) {
    open(tree.left, count, table);
  } else if (table.has(count + 1)) {
    table.set(count + 1, [...table.get(count + 1), "null"]);
  } else if (!table.has(count + 1)) table.set(count + 1, ["null"]);

  if (tree.right) {
    open(tree.right, count, table);
  } else if (table.has(count + 1)) {
    table.set(count + 1, [...table.get(count + 1), "null"]);
  } else if (!table.has(count + 1)) table.set(count + 1, ["null"]);
};
