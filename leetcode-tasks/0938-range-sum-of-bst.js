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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
  let sum = 0;

  let search = root => {
    if (root.val >= L && root.val <= R) sum += root.val;
    if (root.left !== null) search(root.left);
    if (root.right !== null) search(root.right);
  };

  search(root);
  return sum;
};
