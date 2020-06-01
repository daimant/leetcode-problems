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
 * @param arr
 * @param deep
 * @return {number[]}
 */
const largestValues = function(root, arr = [], deep = 0) {
  if (!root) return [];

  if (!isFinite(arr[deep])) arr[deep] = -Infinity;
  if (arr[deep] < root.val) arr[deep] = root.val;

  if (root.left) largestValues(root.left, arr, deep + 1);
  if (root.right) largestValues(root.right, arr, deep + 1);

  return arr;
};
