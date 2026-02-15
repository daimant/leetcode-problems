// Accepted 107 / 107 testcases passed Sergey Pomortsev submitted at Feb 13, 2026 13:37
// Solution Runtime 3 ms Beats 97.96% Analyze Complexity Memory 64.30 MB Beats 26.53%

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

function constructMaximumBinaryTree(nums: number[]): TreeNode | null {
  const head = new TreeNode()

  const buildTree = (link: TreeNode | null, start: number, end: number) => {
    if (!link) return
    const maxI = findMaxI(nums, start, end)
    if (maxI === -1) return
    link.val = nums[maxI]

    if (start !== maxI) {
      link.left = new TreeNode()
      buildTree(link.left, start, maxI - 1)
    }
    if (end !== maxI) {
      link.right = new TreeNode()
      buildTree(link.right, maxI + 1, end)
    }
  }
  buildTree(head, 0, nums.length - 1)

  return head
};

const findMaxI = (nums: number[], start: number, end: number) => {
  let max = -1
  let maxI = -1

  for (let i = start; i <= end; i++) {
    if (nums[i] > max) {
      max = nums[i]
      maxI = i
    }
  }

  return maxI
}