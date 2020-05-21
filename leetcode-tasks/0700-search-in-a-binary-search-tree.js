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
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function(root, val) {
  let result = null;
  open(root);
  return result;

  function open(tree) {
    if (result || !tree) return;
    if (tree.val === val) result = tree;

    open(tree.left);
    open(tree.right);
  }
};
