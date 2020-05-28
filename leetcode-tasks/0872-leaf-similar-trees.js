/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  const arr1 = [],
    arr2 = [];

  open(root1, arr1);
  open(root2, arr2);

  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;

  function open(tree, arr) {
    if (!tree) return;
    if (!tree.left && !tree.right) arr.push(tree.val);
    open(tree.left, arr);
    open(tree.right, arr);
  }
};
