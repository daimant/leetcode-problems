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
const widthOfBinaryTree = function(root) {
  const open = (tree, level = 0, parent = 0) => {
    if (!tree) return;

    if (!table[level]) table[level] = { min: parent, max: parent };
    else if (table[level]["min"] > parent) table[level]["min"] = parent;
    else if (table[level]["max"] < parent) table[level]["max"] = parent;

    if (tree.left) open(tree.left, level + 1, parent * 2);
    if (tree.right) open(tree.right, level + 1, parent * 2 + 1);
  };
  const table = {};
  let maxWidth = 0;

  open(root);

  for (let key in table) {
    const curr = table[key]["max"] - table[key]["min"] + 1;

    if (curr > maxWidth) maxWidth = curr;
  }

  return maxWidth;
};
