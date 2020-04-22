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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return [];
  let paths = [];

  const open = (tree, parents = []) => {
    if (!tree) return null;

    parents.push(tree.val);

    const left = tree.left ? open(tree.left, parents.slice()) : null;
    const right = tree.right ? open(tree.right, parents.slice()) : null;

    if (left === null && right === null) paths.push(parents);
  };

  open(root);

  return paths.map(el => [...el].toString().replace(/,/g, "->"));
};
