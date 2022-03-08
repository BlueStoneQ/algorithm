/**
 * leet: https://leetcode-cn.com/problems/max-area-of-island/
 * 2022-3-8
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247492234&idx=1&sn=fef28b1ca7639e056104374ddc9fbf0b&scene=21#wechat_redirect
 * my题解：和dong哥基本一致：https://leetcode-cn.com/problems/max-area-of-island/comments/1424677
 */



const LAND_SIGN = 1;
const SEA_SIGN = 0;

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    // defend
    if (grid.length <= 0 || !grid[0] || grid[0].length <= 0) return 0;
    // init data
    let maxLandSize = 0;
    const rowCount = grid.length, colCount = grid[0].length;
    // algo
    /**
     * 定义：辅助函数：递归回溯
     * 淹没[row][col]的所相连的所有陆地（也就是grid[row][col]所在的小岛） 并返回该岛的面积
     * full-flood算法
     * me: 为什么要淹没？为了后面在统计枚举每一个row + col组合时 不会重复统计（一个小岛上有多个陆地快，不淹没，就会都统计一遍，无法一个陆地块就确定一个小岛了）
     * @return {Number} 岛屿面积
     */
    const flood = function(row, col) {
        // base case1: row col 下标越界 面积返回0
        if (row < 0 || col < 0 || row >= rowCount || col >= colCount) return 0;
        // base case2: gird[row][col]就是海水 无需淹没 面积返回0
        if (grid[row][col] === SEA_SIGN) return 0;

        // 淹没当前陆地
        grid[row][col] = SEA_SIGN;

        // 返回 当前统计到的上下左右的面积 + 当前的面积1
        return flood(row - 1, col) // 上
                + flood(row + 1, col) // 下
                + flood(row, col - 1) // 左
                + flood(row, col + 1) // 右
                + 1; // 当前面积
    }

    // 枚举 淹没并统计每一个小岛的面基 更新最大的岛屿面积
    for (let row = 0; row < rowCount; row++) {
        for (let col = 0; col < colCount; col++) {
            if (grid[row][col] === LAND_SIGN) {
                maxLandSize = Math.max(maxLandSize, flood(row, col));
            }
        }
    }

    // return
    return maxLandSize;
};