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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
const delNodes = function(root, to_delete) {
  const check = (tree, parent = null, direction = "") => {
    if (!tree) return;

    if (!parent && !to_delete.has(tree.val)) result.push(tree);

    if (to_delete.has(tree.val)) {
      if (tree.left) canCheck.push(tree.left);
      if (tree.right) canCheck.push(tree.right);

      if (parent) parent[direction] = null;
    } else {
      if (tree.left) check(tree.left, tree, "left");
      if (tree.right) check(tree.right, tree, "right");
    }
  };

  const canCheck = [root];
  const result = [];
  to_delete = new Set(to_delete);

  while (canCheck.length) {
    const currTree = canCheck.shift();
    check(currTree);
  }

  return result;
};
