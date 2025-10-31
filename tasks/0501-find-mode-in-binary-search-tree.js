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
 * @return {number[]}
 */
const findMode = function(root) {
  const open = tree => {
    if (!tree) return;

    if (!table.has(tree.val)) {
      table.set(tree.val, 1);
      if (max < 1) max++;
    } else {
      const curr = table.get(tree.val) + 1;
      table.set(tree.val, curr);
      if (max < curr) max = curr;
    }

    if (tree.left) open(tree.left);
    if (tree.right) open(tree.right);
  };
  const table = new Map();
  let max = 0;

  open(root);
  return [...table].filter(el => el[1] === max).map(el => el[0]);
};
