// Runtime 57 ms Beats 100% Memory 45.1 MB Beats 43.36%

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor (val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

const checkTree = (root: TreeNode | null): boolean => root.val === root.left.val + root.right.val
