/**
 * leet: https://leetcode-cn.com/problems/house-robber-iii/
 * 2022-3-17
 * kaer: https://programmercarl.com/0337.%E6%89%93%E5%AE%B6%E5%8A%AB%E8%88%8DIII.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**

DP: 树形DP + 打家劫舍

 树形dp的入门题目

 关键是要讨论当前节点抢还是不抢。

 采用树的后续遍历 遍历 则需要一个辅助遍历函数

 动态规划其实就是使用状态转移容器来记录状态的变化

 dp五部曲：
 1. dp数组定义:XX
    - 树形dp 我们要先确定树遍历的函数返回值和参数：
        - 参数：curRoor 当前节点
        - 返回值：数组[doNot, do] 
            - doNot: 不偷该节点所得到的的最大金钱
            - do: 偷该节点所得到的的最大金钱
 2. dp状态转移公式XX：
    - 确定单层递归逻辑：
     - 不偷当前节点（则左右孩子就可以偷, 至于到底偷不偷一定是选一个最大的)
        - doNot = max(resultLeft[0], resultLeft[1]) + max(resultRight[0], resultRight[1])
     - 偷当前节点（则左右孩子就不能偷）：do = curRoot.val + resultLeft[0] + resultRight[0]

     比较2个选择的值大小 取最大值
     return [doNot, do]


最终结果 就是整个遍历完后 返回到头结点哪一层的返回值 
 3. 初始化dp:
 base case
 4. 遍历顺序:
 后序遍历
 5. 举例推导dp:

 复杂度：

 * @param {TreeNode} root
 * @return {number}
 */
 var rob = function(root) {
  // defend
  // init data

  // algo
  const [doNot, doIt] = traverse(root);
  
  // return 
  return Math.max(doNot, doIt);
};

/**
  * 辅助遍历tree的函数
  * @return {Array} [doNot, do] 即[不选当前节点的最大值, 选择当前节点的最大值]
  */
function traverse(curRoot) {
  // base case - 一般就是到达叶子节点 无论偷 或者 不偷 都是0，相当于dp数组的初始化
  if (curRoot === null) return [0, 0];

  // 递归遍历访问左右子节点 收集到返回值 分2种情况遍历
  const [ resultLeftDoNot, resultLeftDo ] = traverse(curRoot.left);
  const [resultRightDoNot, resultRightDo ] = traverse(curRoot.right);

  // 不偷当前节点curRoot
  const doNot = Math.max(resultLeftDoNot, resultLeftDo) + Math.max(resultRightDoNot, resultRightDo);

  // 偷当前节点curRoot
  const doCur = curRoot.val + resultLeftDoNot + resultRightDoNot;

  // 后续遍历点 处理返回值 [偷，不偷]
  return [doNot, doCur];
}