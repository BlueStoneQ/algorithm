/**
 * leet: https://leetcode-cn.com/problems/spiral-matrix-ii/
 * Date: 2022-1-30
 * 东哥题解：https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247494275&idx=1&sn=8521942340ebd1793530507451fb60d3&scene=21#wechat_redirect
 * leet: 54题的逆向
 */

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  // 防御
  if (typeof n !== "number") return;
  if (n === 0) retrun [0];
  // 初始化值
  const res= [];
  let j = 0;
  while(j < n) {
    res[j] = new Array(n);
    j++;
  }
  console.log(res);

  // 当前要填入matrix的数字
  let curNum = 1;
  // 1. 定义4个边界
  let upperBound = 0;
  let rightBound = n - 1;
  let bottomBound = n - 1;
  let leftBound = 0;
  // 核心算法
  // 注意：curNum是从0开始的 n*n是其最后一个数 边界判断注意 包括 =
  while (curNum <= n * n) {
    // 生成顶边：从左到右
    if (upperBound <= bottomBound) {
      for (let i = leftBound; i <= rightBound; i++) {
        res[upperBound][i] = curNum;
        curNum++;
      }
      // 边界朝中心移动
      upperBound++;
    }
    // 生成右边：从上到下
    if (leftBound <= rightBound) {
      for (let i = upperBound; i <= bottomBound; i++) {
        res[i][rightBound] = curNum;
        curNum++;
      }
      // 边界朝中心移动
      rightBound--;
    }
    // 生成底边：从右到左
    if (upperBound <= bottomBound) {
      for (let i = rightBound; i >= leftBound; i--) {
        res[bottomBound][i] = curNum;
        curNum++;
      }
      // 边界朝中心移动
      bottomBound--;
    }
    // 生成左边：从下到上
    if (leftBound <= rightBound) {
      for (let i = bottomBound; i >= upperBound; i--) {
        res[i][leftBound] = curNum;
        curNum++;
      }
      // 边界朝中心移动
      leftBound++;
    }
  }
  // 返回结果
  return res;
};

module.exports = generateMatrix;