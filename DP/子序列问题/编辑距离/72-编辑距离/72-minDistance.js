/**
 * leet: https://leetcode-cn.com/problems/edit-distance/
 * 2022-3-23
 * kaer: https://programmercarl.com/0072.%E7%BC%96%E8%BE%91%E8%B7%9D%E7%A6%BB.html#%E6%80%9D%E8%B7%AF
 * me: https://leetcode-cn.com/problems/edit-distance/comments/1458882
 */

/**
 * 
 DP-子序列-编辑距离

 if s1[i] == s2[j]:
    啥都别做（skip）
    i, j 同时向前移动
else:
    三选一：
        插入（insert）
        删除（delete）
        替换（replace）

 DP五部曲：
 1. dp数组定义：
 双串 我们一般定义二维dp数组
 dp[i][j]： 区间为[0, i- 1]word1子串转换成[0, j - 1]的word2子串需要的最少操作数为dp[i][j] 
 也可以描述为：
 以i-1结尾的字符串word1，和以j-1为下标结尾的字符串word2，最近的编辑距离为dp[i][j]

 也可以这样描述 更能解释为什么是i-1 j-1：
 【精髓！！】我们有word1和word2，我们定义dp[i][j]的含义为：word1的前i个字符和word2的前j个字符的编辑距离。意思就是word1的前i个字符，变成word2的前j个字符，最少需要这么多步
 2. 状态转移方程
 双串比较 一般都是 分 当前元素相等 和  不等 2种情况：
  case1： word1[i - 1] === word2[j - 1]
    - 此刻是不需要对word1进行编辑的 操作数不需要增加 继承之前的即可 i j 下标指针继续前移
    - me: 其实就是当前元素i - 1不需要编辑操作 只需要将之前的以i - 2结尾word1编辑成为以j-2结尾的word2
    -  即：dp[i][j] = dp[i - 1][j - 1]
  case2:  word1[i - 1] !== word2[j - 1]
    - 此刻需要对word1进行编辑，编辑分为3中编辑方案 取3种编辑的dp值的最小值
        - 操作1：word1插入一个字符 - 可以看做word2删除一个字符（看做增量的话 dp是自底向上 不能从大下标 推出小下标）
            - 就是 以i-1结尾的word1 到 以j-2结尾的word2 的编辑距离 + 本次操作
            - me: 其实操作顺序就是：word2删除一个元素后，成为j-2结尾，然后以i -1结尾的word1 到 word2[0, j - 2]的编辑距离 如下：
            - 即： dp[i][j - 1] + 1
        - 操作2：word1删除一个字符
            - 那么就是 当前的编辑距离就成了 下标i-2结尾的word1（因为删除了当前元素）到i-1结尾的word2的最近编辑距离 + 本次操作(一次)
            - me: 其实操作顺序就是word1先删除当前元素，成为以i-2为下标的word1，成为word2的编辑距离 如下：
            - 即：dp[i - 1][j] + 1
        - 操作3：word1替换一个字符
            - 此时不用增加/删除元素（也就是元素数量不变），那么以下标为i-2结尾的word1 和 j-2结尾的word2 最近编辑距离 + 一个替换元素的操作
            - me: 这里的操作顺序就是 替换word1当前元素（i- 1）和word2相同，则剩下的编辑操作就是把[i - 2]结尾的word1编辑成[j - 2]结尾的word2 如下：
            - dp[i - 1][j - 1] + 1
    - 取以上三种操作的dp值最小值
 3. 初始化dp数组
 从定义出发 
 dp[i][0] = i
 - 定义：以i-1结尾的word1 编辑成为 word2（空串）的操作步数（编辑距离），那么就是将 [0, i - 1]共i个元素删除掉，操作步数就是i
 dp[0][j] = j
 - 同理，空串word1如何编辑成为j-1结尾的word2, 就是给word1添加[0, j - 1]共j个元素 即操作步数为j
 其他非0下标初始值不会用上 设置什么都可以的 所以可以设置为0占位
 4. 遍历方向
 i - 1 => i
 从 i= 1开始遍历 因为 i 的范围是[1, word1.lenth] 根据定义 映射到word2 为 [0, word1.length - 1]

 5. 举例推导dp数组

 复杂度：

  
 @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
  // defend
  // init data
  const word1Len = word1.length, word2Len = word2.length;

  const dp = Array.from(new Array(word1Len + 1), () => new Array(word2Len + 1).fill(0));
  // dp[i][0] = i, 这里的范围 [0, word1Len]是因为这是dp数组的范围
  for (let i = 0; i <= word1Len; i++) {
      dp[i][0] = i;
  }
  // dp[0][j] = j
  for (let j = 0; j <= word2Len; j++) {
      dp[0][j] = j;
  }
  
  // algo 这里就是遍历word1 和 word2 了 i - 1就是其下标 
  for (let i = 1; i <= word1Len; i++) {
      for (let j = 1; j <= word2Len; j++) {
          if (word1[i - 1] === word2[j - 1]) {
              // 无需编辑操作 当前元素无需编辑操作
              dp[i][j] = dp[i - 1][j - 1];
          } else {
              dp[i][j] = Math.min(
                  dp[i][j - 1] + 1, // 增加word1当前元素
                  dp[i - 1][j] + 1, // 删除word1当前元素
                  dp[i - 1][j - 1] + 1 // 替换word1当前元素
              );
          }
      }
  }

  // return 
  return dp[word1Len][word2Len];
};