/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1 && !t2) return null;
  let tree = new TreeNode();
  const head = tree;

  open(t1, t2, tree);
  return head;

  function open(t1, t2, tree) {
    if (!t1 && !t2) return;

    tree.val = (t1 ? t1.val : 0) + (t2 ? t2.val : 0);

    const l1 = t1 && t1.left ? t1.left : null,
      l2 = t2 && t2.left ? t2.left : null,
      r1 = t1 && t1.right ? t1.right : null,
      r2 = t2 && t2.right ? t2.right : null;

    if (l1 || l2) {
      tree.left = new TreeNode();
      open(l1, l2, tree.left);
    }

    if (r1 || r2) {
      tree.right = new TreeNode();
      open(r1, r2, tree.right);
    }
  }
};
