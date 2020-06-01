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
const sumEvenGrandparent = function(root) {
  let result = 0;
  open(root);
  return result;

  function open(tree, grandpa = 1, parent = 1) {
    if (!tree) return;

    if (tree.left) open(tree.left, parent, tree.val);
    if (tree.right) open(tree.right, parent, tree.val);

    if (grandpa % 2) return;
    result += tree.val;
  }
};
