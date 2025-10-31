/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
  if (!p && !q) return true;
  if ((!p && q) || (p && !q)) return false;
  let arrP = [p],
    arrQ = [q];

  do {
    const P = arrP.shift(),
      Q = arrQ.shift();

    if ((!P && Q) || (P && !Q) || P.val !== Q.val) return false;

    if (P.left || Q.left) {
      arrP.push(P.left);
      arrQ.push(Q.left);
    }
    if (P.right || Q.right) {
      arrP.push(P.right);
      arrQ.push(Q.right);
    }
  } while (arrQ.length || arrP.length);

  return true;
};
