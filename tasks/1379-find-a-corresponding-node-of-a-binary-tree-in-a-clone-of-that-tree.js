/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

const getTargetCopy = function(original, cloned, target) {
  const open = (tree1, tree2) => {
    if (!tree1) return;

    if (target === tree1) result = tree2;

    if (tree1.left) open(tree1.left, tree2.left);
    if (tree1.right) open(tree1.right, tree2.right);
  };

  let result;
  open(original, cloned);
  return result;
};
