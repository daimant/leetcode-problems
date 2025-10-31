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
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function(root, k) {
  const search = tree => {
    if (!tree) return;

    arr.push(tree.val);

    if (tree.left) search(tree.left);
    if (tree.right) search(tree.right);
  };
  const arr = [];

  search(root);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] + arr[j] === k) return true;
    }
  }

  return false;
};
