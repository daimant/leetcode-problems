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
 * @return {number[][]}
 */
const verticalTraversal = function(root) {
  const open = (tree, lean = 0, level = 0) => {
    if (!tree) return;

    if (!hash.has(lean)) hash.set(lean, [[tree.val, level]]);
    else hash.set(lean, [...hash.get(lean), [tree.val, level]]);

    if (tree.left) open(tree.left, lean - 1, level - 1);
    if (tree.right) open(tree.right, lean + 1, level - 1);
  };
  const hash = new Map();
  open(root);

  return [...hash]
    .sort((a, b) => a[0] - b[0])
    .map(el =>
      el[1]
        .sort((a, b) => (b[1] === a[1] ? a[0] - b[0] : b[1] - a[1]))
        .map(el => el[0])
    );
};
