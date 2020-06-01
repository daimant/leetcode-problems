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
const preorderTraversal = root => {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length) {
    const curr = queue.shift();

    result.push(curr.val);

    if (curr.right) queue.unshift(curr.right);
    if (curr.left) queue.unshift(curr.left);
  }

  return result;
};
