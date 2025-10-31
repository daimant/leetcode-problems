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
var levelOrderBottom = function(root) {
  if (!root) return [];
  let arr = [];

  open(root, arr);

  return arr;
};

const open = (tree, arr, count = 1) => {
  if (arr.length < count) {
    arr.unshift([tree.val]);
  } else arr[arr.length - count].push(tree.val);

  if (tree.left) open(tree.left, arr, count + 1);
  if (tree.right) open(tree.right, arr, count + 1);
};
