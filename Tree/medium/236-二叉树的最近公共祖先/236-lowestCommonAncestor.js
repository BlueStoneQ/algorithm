/**
 * leet: https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/
 * Date: 2022-2-7
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247485561&idx=1&sn=a394ba978283819da1eb34a256f6915b&scene=21#wechat_redirect
 * 参考题解：[代码随想录](https://programmercarl.com/0236.%E4%BA%8C%E5%8F%89%E6%A0%91%E7%9A%84%E6%9C%80%E8%BF%91%E5%85%AC%E5%85%B1%E7%A5%96%E5%85%88.html)
 *  - 这一篇讲得比较清晰易懂
 *  - 在gitbranch1上执行 git rebase branch2：本质上就是找到branch1 和 branch2 的公共祖先A，
 *      然后将A到branch2.HEAD的所有节点copy一份，（同时新链条每个节点生成新的hashId）
 *      将该A->branch2.HEAD'链接到A和branch1.HEAD, 形成A -> branch2.HEAD' -> branch1.HEAD
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 回溯法
 * 自底向上
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  // 防御
  if (root === null) return null;
  // 调用辅助函数
  return _lowestCommonAncestor(root, p, q);
};

/**
* 核心思路：自底向上回溯：如果找到一个节点，发现左子树出现结点p，右子树出现节点q，或者 左子树出现结点q，右子树出现节点p，那么该节点就是节点p和q的最近公共祖先。
* 描述递归函数定义：入参 返回值
* 定义：返回 p q 2个节点的最近公共祖先，分几种case返回不同节点
* @param curRoot 当前子树root节点
* @param p q 需要寻找的2个节点
* @return {TreeNode} 返回一个节点：分以下几个case:
  - 如果当前节点null 返回 null （即当前节点root）
  - 如果当前节点 === p 、q，那么 当前节点就是p 、 q 其中某一个的父节点 进行返回 通过返回值将该父节点向上传递
  - 如果当前节点左子树中含有p 或者 q(特征就是左右子树在遇到curRoot === p 或者的q的时候 将curRoot通过返回值层层返回上来了 保证了返回值不为空 我们就可以知道该子树是含有p 或者 q的)
      - 如果 左右子树都分别含有 p q，则当前curRoot就是它们的最近公共祖先 则通过返回值一路向上返回
      - 如果 只有左子树含有 p 或者 q， 则向上返回含有p 或者 q 的子树的返回值 
- 回溯法：其实就是自底向上将base case的值 一路向上返回
  - base case1：叶子节点 左右都是null 则一路向上返回null
  - base case2：遇到了p 或者 q 则该节点就一路向上返回
*/
function _lowestCommonAncestor(curRoot, p , q) {
  // base case：到了空节点 或者 遇到了p q其中一个 则返回该curRoot
  if (curRoot === null || curRoot === p || curRoot === q) return curRoot;
  
  // 调用递归 获取左右子树情况，这里的left和right其实作用本质上应该是flag或者signal, 但是其实也会是node节点
  const left = _lowestCommonAncestor(curRoot.left, p, q);
  const right = _lowestCommonAncestor(curRoot.right, p, q);

  // 判断左右子树返回值 决定目前的返回值
  // case1: 在当前子树的左右子树中找到了p q,则 curRoot就是最近的共工祖先，一路返回上去
  if (left !== null && right !== null) return curRoot; // 左右子树中发现了p q,并传递了上来
  // case2: 右子树没有找到p q,
  if (right === null) return left; // 因为上面排除了左右子树都是null的情况 此时 right === null的情况下 left是不可能为null的 则left就是p q之一
  if (left === null) return right;
  // 下面这个情况 包含在了上面case2 case3的情况之中
  // if (right === null && left === null) return null;
}