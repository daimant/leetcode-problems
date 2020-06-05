/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const findSecondMinimumValue = function(root) {
  const open = tree => {
    if (!tree) return;
    unique.add(tree.val);
    open(tree.left);
    open(tree.right);
  };
  const unique = new Set();

  open(root);
  return [...unique].sort((a, b) => a - b)[1] || -1;
};
