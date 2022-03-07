/**
 * leet: https://leetcode-cn.com/problems/number-of-islands/
 * 2022-3-7
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492234&idx=1&sn=fef28b1ca7639e056104374ddc9fbf0b&scene=21#wechat_redirect
 */

 const LAND_SIGN = '1'; // 陆地
 const SEA_SIGN = '0'; // 海水
 
 /**
  * 计数过后的岛屿：就淹没掉
  * 方法1: DFS
  * @param {character[][]} grid
  * @return {number}
  */
 var numIslands = function(grid) {
     // defend
     if (grid.length < 0) return 0;
     // init data
     let islandCount = 0; 
     const rowCount = grid.length, colCount = grid[0].length;
     // 定义：递归回溯函数
     const flood = function(row, col) {
         // base case1： 索引超出边界
         if (row < 0 || col < 0 || row >= rowCount || col >= colCount) return;        
 
         // base case2: 当前点已经是海水了
         if (grid[row][col] === SEA_SIGN) return;
 
         // 将当前坐标点淹没为“海水”
         grid[row][col] = SEA_SIGN;
 
         // 淹没当前坐标点的上下左右的陆地
         flood(row - 1, col); // 上
         flood(row + 1, col); // 下
         flood(row, col - 1); // 左
         flood(row, col + 1); // 右
     }
 
     // algo
     for (let row = 0; row < rowCount; row++) {
         for (let col = 0; col < colCount; col++) {
             if (grid[row][col] === LAND_SIGN) {
                 // 每发现一个岛屿 岛屿数量+1
                 islandCount++;
                 // 然后使用DFS 将这个岛屿淹没 方便其他岛屿边界计算（[full-flood算法](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484514&idx=1&sn=cc0531313d992eb68855457ec5ea08f8&scene=21#wechat_redirect)）
                 flood(row, col);
             }
         }
     }
 
     // return
     return islandCount;
 };