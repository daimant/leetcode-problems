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
var sumRootToLeaf = function(root) {
  if (!root) return 0;
  const arr = [];
  open(root);
  return arr.reduce((acc, curr) => parseInt(curr, 2) + acc, 0);

  function open(tree, parent = "") {
    if (!tree) return;
    parent += tree.val;

    if (!tree.left && !tree.right) arr.push(parent);

    open(tree.left, parent);
    open(tree.right, parent);
  }
};
