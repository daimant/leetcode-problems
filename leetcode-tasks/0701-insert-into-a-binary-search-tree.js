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
 * @param {number} val
 * @return {TreeNode}
 */
const insertIntoBST = function(root, val) {
  const search = tree => {
    if (!tree) return (root = new TreeNode(val));

    if (tree.val < val) {
      if (!tree.right) tree.right = new TreeNode(val);
      else search(tree.right);
    } else {
      if (!tree.left) tree.left = new TreeNode(val);
      else search(tree.left);
    }
  };
  search(root);
  return root;
};
