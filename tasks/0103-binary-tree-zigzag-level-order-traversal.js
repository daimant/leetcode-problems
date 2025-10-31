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
 * @return {number[][]}
 */
const zigzagLevelOrder = function(root) {
  const walk = (tree, deep = 0) => {
    if (!root) return;

    if (!collection[deep]) collection[deep] = [];

    if (deep % 2) collection[deep].unshift(tree.val);
    else collection[deep].push(tree.val);

    if (tree.left) walk(tree.left, deep + 1);
    if (tree.right) walk(tree.right, deep + 1);
  };
  const collection = [];
  walk(root);
  return collection;
};
