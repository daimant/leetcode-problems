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
const findTilt = function(root) {
  if (!root) return 0;
  let result = 0;
  open(root);
  return result;

  function open(tree) {
    if (!tree) return 0;
    const left = tree.left ? open(tree.left) : 0;
    const right = tree.right ? open(tree.right) : 0;

    result += Math.abs(left - right);
    return left + right + tree.val;
  }
};
