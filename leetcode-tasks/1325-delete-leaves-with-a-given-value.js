// Accepted
// Runtime 100 ms Beats 5.11% of users with JavaScript
// Memory 41.60 MB Beats 100.00% of users with JavaScript

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
 * @param {number} target
 * @return {TreeNode}
 */
const removeLeafNodes = function(root, target) {
  const search = tree => {
    if (!tree) return false;
    if (
      tree.left &&
      tree.left.val === target &&
      !tree.left.left &&
      !tree.left.right
    ) {
      tree.left = null;
      return true;
    }
    if (
      tree.right &&
      tree.right.val === target &&
      !tree.right.left &&
      !tree.right.right
    ) {
      tree.right = null;
      return true;
    }

    return search(tree.left) || search(tree.right);
  };

  let canSearch = true;

  while (canSearch) {
    canSearch = search(root);
  }

  return root && root.val === target && !root.left && !root.right ? null : root;
};
