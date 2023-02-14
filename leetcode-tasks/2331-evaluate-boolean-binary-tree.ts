// wrong 53 / 75 testcases passed

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

const evaluateTree = (root: TreeNode | null): boolean => {
  if (!root || root.val === 0 || root.val === 1) {
    return Boolean(root && root.val)
  }

  if (root.val === 3) {
    return typeof root.left === 'number' && root.left === 1 || typeof root.right === 'number' && root.right === 0
  }
  if (root.val === 2) {
    return evaluateTree(root.left) || evaluateTree(root.right)
  }

  return evaluateTree(root)
}
