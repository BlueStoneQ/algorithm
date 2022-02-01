/**
 * leet: https://leetcode-cn.com/problems/capacity-to-ship-packages-within-d-days/
 * Date: 2022-2-1
 * donge: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247491336&idx=1&sn=dbcbb07b05ebc7889f944d54d2acebd4&scene=21#wechat_redirect
 * 类型：
 *  求最值
 *  1. 二分法（题目中具有单调关系），这里求最低运载能力 就是求左边界值，所有二分法求值 尽量画出f(x)的单调函数图
 *    - x: 题目要求的 这里就是船的运载能力
 *    - f(x): 以x为运载能力运完货物需要的时间
 *    - target: 要求的运货时间
 *  2. 动态规划（兜底方法，一般复杂性较高，作为兜底方法）
 */

/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function(weights, days) {
  // 防御
  if (!Array.isArray(weights)) return;
  if (typeof days !== 'number') return;
  if (days === 0) return;
  // 初始化值 
  let leftIndex = Math.max(...weights); // 船的最小载重应该是weights数组中元素的最大值，因为每次至少得装一件货物走，不能说装不下嘛
  let rightIndex = weights.reduce((preVal, curVal) => preVal + curVal, 0); // 这里rightIndex的值 要注意：其最大值为所有货物的重量之和weightSum + 1;(+1是为了访问到weightSum这个最大值)
  /**
   * 定义f(x) 这里f(x)沿x单调递减
   * @param {*} x 运载能力
   * @returns 运载完货物wights需要的时间f(x)
   */
  const f = function(x) {
    let day = 0;
    for (let i = 0; i < weights.length;) {
      // 新的一船 初始化cup值
      let cup = x;
      while (i < weights.length) {
        // cup是一个动态值 表示在1day中 该船目前的剩余运载量
        if (cup < weights[i]) break;
        cup -= weights[i];
        i++;
      }
      // 装够一船 船开走 运时一天
      day++;
    }
    return day;
  }
  // 核心算法 二分法遍历
  while (rightIndex > leftIndex) {
    // 求mid下标
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
    const midVal = f(midIndex);
    // mid === target (这3个条件 有些可以合并 写出完整的三种条件后 可以合并)
    if (midVal === days) {
      // 求左边界值 需要右边界向左逼近
      rightIndex = midIndex;
      continue;
    }
    // mid > target
    if (midVal > days) {
      // 因为f(x)单调递减 落在了y轴的starget线以上 x轴的taget区段左侧 需要向右侧逼近 逼近保持步长1 （midIndex肯定不在target 直接步进1）
      leftIndex = midIndex + 1;
      continue;
    }
    // mid < target
    if (midVal < days) {
      // 因为f(x)单调递减 落在了y轴的starget线以下 x轴的taget区段右侧 需要向左侧逼近
      rightIndex = midIndex;
      continue;
    }
  }
  // 返回结果
  return leftIndex;
};

shipWithinDays([1,2,3,1,1], 4)