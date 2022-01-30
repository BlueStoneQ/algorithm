/**
 * leet: https://leetcode-cn.com/problems/spiral-matrix/
 * Date: 2022-1-30
 * 东哥题解：https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247494275&idx=1&sn=8521942340ebd1793530507451fb60d3&scene=21#wechat_redirect
 * 核心思路：从4个边界不断收缩 进行螺旋遍历
 * 心里要有一副具象的图 不断收缩边界遍历的动态图
 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  // 防御
  if (!Array.isArray(matrix)) return;
  // 初始化变量
  const res = [];
  const height = matrix.length;
  const width = matrix[0].length;
  // 1. 定义4个边界
  let upperBound = 0;
  let rightBound = width - 1;
  let bottomBound = height - 1;
  let leftBound = 0;
  // 核心算法
  while (res.length < height * width) {
    // 顶部边从左向右遍历
    if (upperBound <= bottomBound) {
      for (let i = leftBound; i <= rightBound; i++) {
        res.push(matrix[upperBound][i]);
      }
      // 边界朝中心收缩
      upperBound++;
    }
    // 右侧边从上到下遍历
    if (leftBound <= rightBound) {
      for (let i = upperBound; i <= bottomBound; i++) {
        res.push(matrix[i][rightBound]);
      }
      // 边界朝中心收缩：左侧边界收缩
      rightBound--;
    }
    // 底边从右向左遍历
    if (upperBound <= bottomBound) {
      for (let i = rightBound; i >= leftBound; i--) {
        res.push(matrix[bottomBound][i]);
      }
      // 边界朝中心收缩
      bottomBound--;
    }
    // 左侧边从下向上遍历
    if (leftBound <= rightBound) {
      for (let i = bottomBound; i >= upperBound; i--) {
        res.push(matrix[i][leftBound]);
      }
      // 边界朝中心收缩
      leftBound++;
    }
  }
  // 输出结果
  return res;
};

module.exports = spiralOrder;