// Accepted 18 / 18 testcases passed Sergey Pomortsev submitted at Mar 04, 2026 22:29
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 74.37 MB Beats 93.68%

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function countNodes(root: TreeNode | null): number {
  if (!root) return 0;
  let count = 0;

  function check(link: TreeNode | null) {
    count++;
    if (link.left) check(link.left);
    if (link.right) check(link.right);
  }

  check(root);

  return count;
};