/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param deep
 * @return {number}
 */
var maxDepth = function(root, deep = 1) {
  if (!root) return 0;
  return Math.max(
    maxDepth(root.left, deep + 1),
    maxDepth(root.right, deep + 1),
    deep
  );
};
