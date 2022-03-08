/**
 * leet: https://leetcode-cn.com/problems/number-of-closed-islands/
 * 2022-3-8
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492234&idx=1&sn=fef28b1ca7639e056104374ddc9fbf0b&scene=21#wechat_redirect
 */


 const LAND_SIGN = 0;
 const SEA_SIGN = 1;
 
 /**
  * DFS + full-flood算法
  * @param {number[][]} grid
  * @return {number}
  */
 var closedIsland = function(grid) {
     // defend
     if (grid.length <= 0) return 0;
     // init data
     let islandCount = 0;
     const rowCount = grid.length, colCount = grid[0].length;
     /** 
      * 定义：递归回溯函数 从row col 开始将与之相邻的陆地全部淹没掉
      * full-flood算法
      */
     const flood = function(row, col) {
         // base case1: 下标越界
         if (row < 0 || col < 0 || row >= rowCount || col >= colCount) return;
 
         // base case2: 当前格子已经是海水
         if (grid[row][col] === SEA_SIGN) return;
 
         // 实际淹没动作：淹没grid[row][col]
         grid[row][col] = SEA_SIGN;
 
         // 淹没grid[row][col]的上下左右
         flood(row - 1, col); // 上
         flood(row + 1, col); // 下
         flood(row, col - 1); // 左
         flood(row, col + 1); // 右
     }
     // algo
     // 先把四边的岛屿都淹没掉 剩下的就是封闭岛屿了
     // 淹上边（row = 0） 和 下边(row = rowCount - 1)
     for (let col = 0; col < colCount; col++) {
         flood(0, col);
         flood(rowCount - 1, col);
     }
 
     // 淹左边（col = 0） 和 右边(col = colCount - 1)
     for (let row = 0; row < rowCount; row++) {
         flood(row, 0);
         flood(row, colCount - 1);
     }
 
     // 计数 并 淹没 封闭岛屿
     for (let row = 0; row < rowCount; row++) {
         for (let col = 0; col < colCount; col++) {
             if (grid[row][col] === LAND_SIGN) {
                 islandCount++;
                 flood(row, col);
             }
         }
     }
 
     // return
     return islandCount;  
 };