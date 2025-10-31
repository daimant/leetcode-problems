"use strict";

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**Yt
 * @param {number[]} nums
 * @param tree
 * @return {TreeNode}
 */
var sortedArrayToBST = (nums, tree = {}) => {
  if (!nums.length) return null;
  const middle = Math.trunc(nums.length / 2);

  tree = new TreeNode(nums[middle]);

  tree.left = middle > 0 ? sortedArrayToBST(nums.slice(0, middle), tree) : null;
  tree.right =
    middle < nums.length - 1
      ? sortedArrayToBST(nums.slice(middle + 1), tree)
      : null;

  return tree;
};
