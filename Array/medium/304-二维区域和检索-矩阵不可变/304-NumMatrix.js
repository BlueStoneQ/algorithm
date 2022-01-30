/**
 * leet: https://leetcode-cn.com/problems/range-sum-query-2d-immutable/
 * Date: 2022-1-29
 * dong题解：[构造前缀和数组](https://labuladong.gitee.io/algo/2/21/56/)
 */

/**
 * 下标处理 参考东哥
 * 复杂度：
 * 时间:
 *  - 初次构造：O(n)
 *  - 查询：O(1)
 * 空间:
 *  - O(n)
 * me: 一定要注意：
 *  1. preSum 是 (height + 1) * (height + 1)， 下标从[1, 1] 开始，用[row+1][col+1]代表[0][0]到[row][col]的和
 *  2. preSum的下标从1开始 是因为 为了下面matrix[row-1][col-1]能够访问到matrix[0][0], 构造大一圈的前缀和数组 是为了优雅地处理matrix的边界行列问题
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
  const height = matrix.length;
  const width = matrix[0].length;
  // 防御
  if (!Array.isArray(matrix)) return;
  if (height === 0 || width === 0) return;
  // 初始化属性
  // 前缀和数组: 二维数组一定要提前构造 并 占位 否则容易引起属性访问错误
  // 注意 前缀和的数组每一列需要初始化为0 才会在后面的数学+-运算中 不会出问题（否则 默认值为undefined， undefined + 1 = NaN）, 注意长度需要+1（就是一个(height+1)*(height+1)），理由见下面注释
  this.preSums = [];
  for (let i= 0; i < height + 1; i++) {
    this.preSums[i] = new Array(width+1).fill(0);
  }
  // 构造前缀和数组 （preSum的下标从1开始 是因为 为了下面matrix[row-1][col-1]能够访问到matrix[0][0], 构造大一圈的前缀和数组 是为了优雅地处理matrix的边界行列问题）
  for (let row = 1; row <= height; row++) {
    for (let col = 1; col <= width; col++) {
      // 这条公式需要观察矩阵图得来 其实就是几个以[0,0]为顶点的矩阵相加 - 重复的部分
      this.preSums[row][col] = this.preSums[row - 1][col] + this.preSums[row][col - 1] + matrix[row-1][col-1] - this.preSums[row - 1][col - 1];
    }
  }
};

/**
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
  // 上面构造preSums的公式 反向推导：这里+1 是因为前缀和数组用[row+1,col+1]存储的[0,0]到[row,col]的和
  return this.preSums[row2+1][col2+1] - this.preSums[row1][col2+1] - this.preSums[row2+1][col1] + this.preSums[row1][col1];
};

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */
module.exports = NumMatrix;