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
 * @param parents
 * @return {number}
 */
const goodNodes = (root, parents = []) => !root ? 0 : [
  parents.reduce((acc, curr) => curr > root.val || acc === 0 ? 0 : acc, 1),
  goodNodes(root.left, [...parents, root.val]),
  goodNodes(root.right, [...parents, root.val])
].reduce((acc, curr) => acc + curr);
