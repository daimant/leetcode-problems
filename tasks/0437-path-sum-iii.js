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
 * @param {number} sum
 * @return {number}
 */
var pathSum = function(root, sum) {
  let count = 0;

  const open = (tree, parents = []) => {
    if (!tree) return;

    let family = [...parents, tree.val];
    let acc = 0;

    for (let i = family.length - 1; i >= 0; i--) {
      acc += family[i];
      if (acc === sum) count++;
    }

    if (tree.left) open(tree.left, family);
    if (tree.right) open(tree.right, family);
  };

  open(root);

  return count;
};
