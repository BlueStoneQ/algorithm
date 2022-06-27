/**
 * leet: https://leetcode-cn.com/problems/rotate-image/
 * Date: 2022-1-30
 * - 通过这个习题，我们要理解各种旋转：
 *  - 顺时针 逆时针 180°（对折） 90°（先对折，再逆序），我们主要关注对角数字最终走到哪儿，就能确定对折轴线
 * 东哥题解：https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247494275&idx=1&sn=8521942340ebd1793530507451fb60d3&scene=21#wechat_redirect
 * 针对矩阵旋转，都套用这个模型：对角线对折 + 翻转每一行
 * 核心思路：
 * - 沿对角线对折（对角线的方向 决定了交换的映射关系 和 是顺逆时针）
 * - reverse每一行
 * 1. me:这种题 画一个3*3的矩阵 就能找到坐标的映射关系了
 */

/**
 * 顺时针旋转90° 
 * 对角线：左上 -> 右下
 * 对折公式：[i][j] <=> [j][i]
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  // 防御
  if (!Array.isArray(matrix)) return;
  // 初始化值
  const matrixWidth = matrix.length;
  // 核心算法
  // 1. 沿对角线对折(沿对角线交换每个镜像元素)
  for (let i = 0; i < matrixWidth; i++) {
    // [!!!]这里从j从i 开始 我们画图就可以知道 对角线对折 只需要遍历对角线一侧的元素即可 对折边界-起点：对折遇到对角线就不要对折了
    for (let j = i; j < matrixWidth; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  // 2. 对每一行进行reverse
  for (let row of matrix) {
    // 如果需要手写 reverse 可以从用一个相向双指针朝中心遍历 不断交换2个指针的值 知道2个指针相遇
    row.reverse();
  }
};

/**
 * 变体：逆时针旋转
 * 区别主要是：对角线对折程序不一样 坐标映射不一样 可以画图观察下 对角线选择了 
 * 对角线： 左下->右上
 * 对折公式：n*n矩阵： [i][j] <=> [n - j - 1][n - i - 1]
 * @param {*} matrix 
 */
const anticlockwiseRotate = (matrix) => {
    // 防御
    if (!Array.isArray(matrix)) return;
    // 初始化值
    const matrixWidth = matrix.length;
    // 核心算法
    // 1. 沿对角线对折(沿对角线交换每个镜像元素)
    for (let i = 0; i < matrixWidth; i++) {
      // 这里从j从i 开始 我们画图就可以知道 对角线对折 只需要遍历对角线一侧的元素即可 对折边界-终点：对折遇到对角线就不要对折了 对角线元素[i][n-i-1]
      for (let j = 0; j < matrixWidth - i; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[matrixWidth - j - 1][matrixWidth - i - 1];
        matrix[matrixWidth - j - 1][matrixWidth - i - 1] = temp;
      }
    }
    // 2. 对每一行进行reverse
    for (let row of matrix) {
      // 如果需要手写 reverse 可以从用一个相向双指针朝中心遍历 不断交换2个指针的值 知道2个指针相遇
      row.myReverse();
    }
}

/**
 * 顺便手写一个reverse函数
 * 可以从用一个相向双指针朝中心遍历 不断交换2个指针的值 知道2个指针相遇
 */
function myReverse() {
  let LIndex = 0, RIndex = this.length - 1;
  while (LIndex >= RIndex) {
    // 交换
    const temp = this[LIndex];
    this[LIndex] = this[RIndex];
    this[RIndex] = temp;
    // 指针前进
    LIndex++;
    RIndex--;
  }
}

(() => {
  Array.prototype.myReverse = myReverse;
})()

module.exports = rotate;