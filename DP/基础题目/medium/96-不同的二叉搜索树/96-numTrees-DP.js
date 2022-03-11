/**
 * leet: https://leetcode-cn.com/problems/unique-binary-search-trees/
 * data: 2022-3-11
 * kaer: https://programmercarl.com/0096.%E4%B8%8D%E5%90%8C%E7%9A%84%E4%BA%8C%E5%8F%89%E6%90%9C%E7%B4%A2%E6%A0%91.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 * 题解：Dp公式参考：https://leetcode-cn.com/problems/unique-binary-search-trees/solution/bu-tong-de-er-cha-sou-suo-shu-by-leetcode-solution/
 */

/**
 * 易懂的题解：https://leetcode-cn.com/problems/unique-binary-search-trees/solution/shou-hua-tu-jie-san-chong-xie-fa-dp-di-gui-ji-yi-h/
 * 更严谨值得一看的状态转移公式推导：官方：https://leetcode-cn.com/problems/unique-binary-search-trees/solution/bu-tong-de-er-cha-sou-suo-shu-by-leetcode-solution/
 * 一定要自己可以独立完成这个公式的推导：
 * DP五部曲：
 * DP数组定义：i个节点组成的二叉搜索树有dp[i]种
 * 状态转移方程： 条件：（ i: [0, n], j: [1, i] ）  dp[i] += dp[j - 1] * dp[i - j]   
 * 其实可以这样理解：n个节点组成的BST其实是：以[1,n]每个元素作为root能组成的BST的种类数之和
 * 而每个元素作为root的BST种类之和又是其：左子树种类 与 右子树种类的组合，也就是乘积（参考排列组合）
 * 遍历方向：后来值 依赖于前置 i和j均是递增
 * 距离dp数组：
 * @param {number} n
 * @return {number}
 */
 var numTrees = function(n) {
  // defend
  if (n <= 2) return n;
  // init data 长度为n+1 因为是[1,n] n(length-1)是包含的 则长度必须为n+1 
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  // algo
  for (let i = 2; i <= n; i++) {
      for (let j = 1; j <= i; j++) {
          // 在j循环内 加上每一个以j为root的BST种类数，
          dp[i] += dp[j - 1] * dp[i - j];
      }
  }
  // return
  return dp[n];
};