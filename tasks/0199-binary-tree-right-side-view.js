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
 * @return {number[]}
 */
const rightSideView = function(root) {
  const search = (tree, deep = 0) => {
    if (!tree) return;

    if (!map.has(deep)) map.set(deep, tree.val);
    else map.set(deep, tree.val);

    if (tree.left) search(tree.left, deep + 1);
    if (tree.right) search(tree.right, deep + 1);
  };
  const map = new Map();
  search(root);
  return [...map].map(el => el[1]);
};
