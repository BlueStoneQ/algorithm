/**
 * leet: https://leetcode-cn.com/problems/unique-paths-ii/
 * 2022-3-10
 * kaer: https://programmercarl.com/0063.%E4%B8%8D%E5%90%8C%E8%B7%AF%E5%BE%84II.html#%E6%80%9D%E8%B7%AF
 */

 const BLOCK = 1; // 障碍物
 const BLANK = 0;
 
 /**
  * DP五部曲：
  * dp[i][j]的定义：机器人从[0, 0]到达[i, j]位置一共有dp[i][j]条路径
  * 状态转移方程-由之前的状态推导出当前状态：dp[i][j] = dp[i - 1][j] + dp[i][j - 1] // 从相邻的2个位置移动过来 - 注意：因为有了障碍，(i, j)如果就是障碍的话应该就保持初始状态（初始状态为0）
  * 遍历顺序和方向： i j 从 0 到 m n
  * dp的初始化值：dp[i][0] = 1; dp[0][j] = 1; // 画个图就清楚了 单维情况下只有一条路径 
  * 举例dp: m = 2, n = 3 => 
  * 有障碍的话，其实就是标记对应的dp table（dp数组）保持初始值(0)就可以了。
  * @param {number[][]} obstacleGrid
  * @return {number}
  */
 var uniquePathsWithObstacles = function(obstacleGrid) {
     // defend
     // init data
     const rowSize = obstacleGrid.length;
     const colSize = obstacleGrid[0].length;
 
     const dp = new Array(rowSize).fill([]);
     for (let row = 0; row < rowSize; row++) {
         dp[row] = new Array(colSize).fill(0); // 初始化为0 占位 也方便后面遇到障碍的时候 不用做处理就是0
     }
 
     // 初始化dp数组
     // 注意代码里for循环的终止条件，一旦遇到obstacleGrid[i][0] == 1的情况就停止dp[i][0]的赋值1的操作，dp[0][j]同理
     for (let row = 0; row < rowSize && obstacleGrid[row][0] === BLANK; row++) {
         dp[row][0] = 1; 
     }
 
     for (let col = 0; col < colSize && obstacleGrid[0][col] === BLANK; col++) {
         dp[0][col] = 1; 
     }
 
     // algo
     for (let row = 1; row < rowSize; row++) {
         for (let col = 1; col < colSize; col++) {
             // [row][col]是障碍物 dp[row][col]则为默认值0
             if (obstacleGrid[row][col] === BLOCK) continue;
             // 正常空格 则进行状态转移
             dp[row][col] = dp[row - 1][col] + dp[row][col - 1];
         }
     }
 
     // return
     return dp[rowSize - 1][colSize - 1];
 };