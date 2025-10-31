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
 * @return {number}
 */
const deepestLeavesSum = function(root) {
  const open = (tree, level = 0) => {
    if (!root) return;

    if (table["deep"] === level) table["value"] += tree.val;
    else if (table["deep"] < level) {
      table["deep"] = level;
      table["value"] = tree.val;
    }

    if (tree.left) open(tree.left, level + 1);
    if (tree.right) open(tree.right, level + 1);
  };
  const table = { deep: 0, value: 0 };

  open(root);
  return table["value"];
};
