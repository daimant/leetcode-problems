/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const pruneTree = function(root) {
  const search = tree => {
    if (!tree) return;

    const left = tree.left ? search(tree.left) : false;
    const right = tree.right ? search(tree.right) : false;

    if (!left && tree.left) tree.left = null;
    if (!right && tree.right) tree.right = null;

    return left || right || tree.val === 1;
  };

  search(root);
  return root;
};
