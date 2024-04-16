// Accepted
// Solution Runtime 112 ms Beats 6.58% of users with JavaScript
// Memory 44.56 MB Beats 100.00% of users with JavaScript

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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
const addOneRow = (root, v, d) => {
  if (d === 1) return new TreeNode(v, root);

  const adding = (tree, deep = 1) => {
    if (!tree) return;

    if (deep === d - 1) {
      tree.left = new TreeNode(v, tree.left);
      tree.right = new TreeNode(v, null, tree.right);
      return;
    }

    adding(tree.left, deep + 1);
    adding(tree.right, deep + 1);
  };

  adding(root);
  return root;
};
