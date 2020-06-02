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
const convertBST = function(root) {
  const open = tree =>
    tree ? [...open(tree.left), tree.val, ...open(tree.right)] : [];
  const change = tree => {
    if (!tree) return;
    tree.val = table.get(tree.val);
    if (tree.left) change(tree.left);
    if (tree.right) change(tree.right);
  };
  const arr = open(root);
  const table = new Map([[arr[arr.length - 1], arr[arr.length - 1]]]);

  for (let i = arr.length - 2; i >= 0; i--) {
    const curr = arr[i];
    const prev = table.get(arr[i + 1]);
    table.set(curr, curr + prev);
  }

  change(root);
  return root;
};
