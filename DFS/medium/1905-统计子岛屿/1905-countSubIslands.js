/**
 * leet: https://leetcode-cn.com/problems/count-sub-islands/
 * 2022-3-8
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492234&idx=1&sn=fef28b1ca7639e056104374ddc9fbf0b&scene=21#wechat_redirect
 */


 const SEA_SIGN = 0;
 const LAND_SIGN = 1;
 
 /**
  * 和1254题-封闭岛屿 有些像，只不过它是淹没四周的岛屿，这个是淹没不可能是子岛的岛屿，排除后，剩下的岛屿都是自岛屿了
  * Q: 怎么判断不可能是子岛的岛屿呢？
  * A: 反过来说，如果岛屿B中存在一片陆地，在岛屿A的对应位置是海水，那么岛屿B就不是岛屿A的子岛。
  * @param {number[][]} grid1
  * @param {number[][]} grid2
  * @return {number}
  */
 var countSubIslands = function(grid1, grid2) {
     // defend
     if (grid1.length <= 0 || !grid1[0] || grid1[0].length <= 0) return 0;
     if (grid2.length <= 0 || !grid2[0] || grid2[0].length <= 0) return 0;
     // init data
     let islandCount = 0;
     const rowCount = grid1.length, colCount = grid1[0].length; // grid1和grid2 等宽 等高
 
     // 定义：DFS函数：淹没grid[row][col]所在的岛屿
     const flood = function(grid, row, col) {
         // base case1: row col 下标越界
         if (row < 0 || col < 0 || row >= rowCount || col >= colCount) return;
         // base case2: gird[row][col]就是海水 无需淹没
         if (grid[row][col] === SEA_SIGN) return;
 
         // 淹没当前陆地
         grid[row][col] = SEA_SIGN;
 
         // 返回 当前统计到的上下左右的面积 + 当前的面积1
         flood(grid, row - 1, col); // 上
         flood(grid, row + 1, col); // 下
         flood(grid, row, col - 1); // 左
         flood(grid, row, col + 1); // 右
     }
 
     // algo
     // 淹没不可能是子岛的岛屿
     for (let row = 0; row < rowCount; row++) {
         for (let col = 0; col < colCount; col++) {
             // grid2中这块土地所在的岛屿 肯定不是子岛(如果岛屿B中存在一片陆地，在岛屿A的对应位置是海水，那么岛屿B就不是岛屿A的子岛。)
             if (grid1[row][col] === SEA_SIGN && grid2[row][col] === LAND_SIGN) {
                 flood(grid2, row, col);
             }
         }
     }
 
     // 淹没并统计子岛的数量
     for (let row = 0; row < rowCount; row++) {
         for (let col = 0; col < colCount; col++) {
             if (grid2[row][col] === LAND_SIGN) {
                 flood(grid2, row, col);
                 islandCount++;
             }
         }
     }
     
     // return 
     return islandCount;
 };