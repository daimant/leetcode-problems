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
 * @return {TreeNode}
 */
const increasingBST = function(root) {
  const arr = open(root);
  let tree = new TreeNode(arr[0]);
  const head = tree;

  for (let i = 1; i < arr.length; i++) {
    tree.right = new TreeNode(arr[i]);
    tree = tree.right;
  }
  return head;

  function open(tree) {
    if (!tree) return [];
    return [...open(tree.left), tree.val, ...open(tree.right)];
  }
};
