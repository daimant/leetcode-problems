/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function(root, sum) {
  const search = (tree, parents = [], parentsSum = 0) => {
    if (!tree) return;
    const currSum = parentsSum + tree.val;
    const currArr = [...parents, tree.val];

    if (!tree.left && !tree.right && currSum === sum) result.push(currArr);
    else {
      if (tree.left) search(tree.left, currArr, currSum);
      if (tree.right) search(tree.right, currArr, currSum);
    }
  };
  const result = [];
  search(root);
  return result;
};
