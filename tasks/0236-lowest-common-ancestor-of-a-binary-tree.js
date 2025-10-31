/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function(root, p, q) {
  if (!root) return null;

  const left = lowestCommonAncestor(root.left, p, q),
    right = lowestCommonAncestor(root.right, p, q),
    curr = root === p || root === q ? "catch" : false;

  if (
    (curr === "catch" && left === "catch") ||
    (curr === "catch" && right === "catch") ||
    (right === "catch" && left === "catch")
  )
    return root;
  else if (left) return left;
  else if (right) return right;
  else return curr;
};
