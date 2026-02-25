// Accepted 71 / 71 testcases passed Sergey Pomortsev submitted at Feb 25, 2026 18:24
// Solution Runtime 0 ms Beats 100.00% Analyze Complexity Memory 54.34 MB Beats 90.24%

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

function postorderTraversal(root: TreeNode | null): number[] {
  const result = []

  const checkNodes = (node: TreeNode | null) => {
    if (!node) return


    if (node.left) checkNodes(node.left)
    if (node.right) checkNodes(node.right)

    result.push(node.val)
  }

  checkNodes(root)

  return result
};