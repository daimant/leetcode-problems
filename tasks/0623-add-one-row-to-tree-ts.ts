// Accepted
// Solution Runtime 64 ms Beats 100.00% of users with TypeScript
// Memory 57.75 MB Beats 14.29% of users with TypeScript

const addOneRow = (root: TreeNode | null, v: number, d: number): TreeNode | null => {
  if (d === 1) return new TreeNode(v, root)

  const adding = (tree, deep = 1) => {
    if (!tree) return

    if (deep === d - 1) {
      tree.left = new TreeNode(v, tree.left)
      tree.right = new TreeNode(v, null, tree.right)
      return
    }

    adding(tree.left, deep + 1)
    adding(tree.right, deep + 1)
  }

  adding(root)
  return root
}