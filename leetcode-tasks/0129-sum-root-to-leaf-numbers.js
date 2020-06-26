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
 * @return {number}
 */
const sumNumbers = function(root) {
  const open = (tree, parent = "") => {
    if (!tree) return;

    if (!tree.left && !tree.right) result += +(parent + tree.val);

    if (tree.left) open(tree.left, parent + tree.val);

    if (tree.right) open(tree.right, parent + tree.val);
  };
  let result = 0;

  open(root);

  return result;
};
