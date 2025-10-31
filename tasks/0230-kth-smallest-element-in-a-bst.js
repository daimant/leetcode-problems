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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  const arr = [];
  open(root);
  arr.sort((a, b) => (a > b ? 1 : -1));

  return arr[k - 1];

  function open(tree) {
    if (!tree) return;
    arr.push(tree.val);
    open(tree.left);
    open(tree.right);
  }
};
