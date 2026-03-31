// Accepted 139 / 139 testcases passed Sergey Pomortsev submitted at Feb 08, 2026 14:39
// Solution Runtime 42 ms Beats 100.00% Analyze Complexity Memory 59.99 MB Beats 100.00%

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

function averageOfSubtree(root: TreeNode | null): number {
  let result = 0

  const checkTree = (link: TreeNode | null): [number, number] => {
    if (!link) return

    const left = checkTree(link.left) || [0, 0]
    const right = checkTree(link.right) || [0, 0]

    const currSum = left[0] + right[0] + link.val
    const currCount = left[1] + right[1] + 1

    if (Math.trunc(currSum / currCount) === link.val) result++

    return [currSum, currCount]
  }

  checkTree(root)

  return result
};