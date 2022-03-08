/**
 * leet; https://leetcode-cn.com/problems/number-of-distinct-islands/
 * 2022-3-8
 * dong：https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492234&idx=1&sn=fef28b1ca7639e056104374ddc9fbf0b&scene=21#wechat_redirect
 */

 const SEA_SIGN = 0;
 const LAND_SIGN = 1;
 
 // 序列化动作： 上 下 左 右 撤销上 撤销下 撤销左 撤销右（撤销均加上-号）
 const UP_SIGN = '1';
 const BELOW_SIGN = '2';
 const LEFT_SIGN = '3';
 const RIGHT_SIGN = '4';
 const BACK_SIGN = '-';
 
 /**
  * DFS + full-flood + 序列化标识唯一性
  * 主体思路：很显然我们得想办法把二维矩阵中的「岛屿」进行转化，变成比如字符串这样的类型，然后利用 HashSet 这样的数据结构去重，最终得到不同的岛屿的个数。
 如果想把岛屿转化成字符串，说白了就是序列化，序列化说白了遍历嘛
  * 这里要用到回溯了
  * @param {number[][]} grid
  * @return {number}
  */
 var numDistinctIslands = function(grid) {
     // defend
     if (grid.length <= 0 || !grid[0] || grid[0].length <= 0) return 0;
     // init data
     let diffIslandSet = new Set(); // 不同岛屿序列化的集合 Set有天然的去重功能 size就是不同岛屿的数量
     const rowCount = grid.length, colCount = grid[0].length;
 
     /**
      * 回溯：淹没grid[row][col]所在小岛 并对该小岛的序列化进行记录
      * @param {Array} path 记录序列化结果（先以数组形式 后面再join()就是序列化结果）
      * @param {string} dir 对应上面的序列化动作
      */
     const flood = function(row, col, path, dir) {
         // base case1 下标越界
         if (row < 0 || col < 0 || row >= rowCount || col >= colCount) return;
         // base case2 当前点为海水
         if (grid[row][col] === SEA_SIGN) return;
 
         // 淹没当前陆地块
         grid[row][col] = SEA_SIGN;
 
         // 回溯
         // 前序遍历：记录正向的dir
         path.push(dir);
         // 递归上下左右各层
         flood(row - 1, col, path, UP_SIGN);
         flood(row + 1, col, path, BELOW_SIGN);
         flood(row, col - 1, path, LEFT_SIGN);
         flood(row, col + 1, path, RIGHT_SIGN);
         // 后续遍历：记录反向（回退）的dir
         path.push(BACK_SIGN + dir);
     }
     // algo
     for (let row = 0; row < rowCount; row++) {
         for (let col = 0; col < colCount; col++) {
             // 找到一块陆地 淹没其所在小岛（防止后面遍历又遇到该岛的陆地 数量就无法统计） 并统计该岛的序列化
             if (grid[row][col] === LAND_SIGN) {
                 const serializationArr = [];
                 flood(row, col, serializationArr, 0); // 起始dir不影响结果的唯一性
                 diffIslandSet.add(serializationArr.join(','));
             }
         }
     }
 
     // return
     return diffIslandSet.size;
 };