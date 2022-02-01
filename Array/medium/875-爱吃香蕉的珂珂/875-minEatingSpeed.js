/**
 * leet:
 * Date: 2022-2-1
 * dongge: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247491336&idx=1&sn=dbcbb07b05ebc7889f944d54d2acebd4&scene=21#wechat_redirect
 * 类型：
 * - 求最小值=二分法：求左边界值，当然可以考虑DP的方法解决（但是dp意味着复杂度一般不会太低），这里作为二分法的例题，更推荐优先使用二分法
 *  - 可以画dongge推荐的坐标图
 * - 二分法：本质上是一种逼近思想
 * - 经典区间：[leftIndex, rightIndex)
 * 二分法适用于一般为求最值的问题，例如求左边界值（min） 和 右边界值(max)：
 * 最重要是确定以下3个因素：
 * - x 题目让求什么 什么就是x 这里的x就是吃香蕉速度 min(x) === k
 * - target: H，时间限制
 * - f(x): 吃完香蕉需要的时间，单调递减函数（吃得速度x越快 需要的时间越短）
 * target = f(x)
 *
 */

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
  // 防御
  if (!Array.isArray(piles)) return;
  if (typeof h !== "number") return;
  // 初始化值
  let leftIndex = 0, rightIndex = Math.max(...piles) + 1; // 最小速度应该是 1，最大速度是piles数组中元素的最大值，因为每小时最多吃一堆香蕉，胃口再大也白搭嘛
  // 核心算法
  /**
   * 定义f(x) 函数, 关于x单调递减
   * @param {*} x 吃香蕉的速度
   * @returns {} h 吃完这堆香蕉需要的时间
   */
  const f = function(x) {
    let resH = 0;
    for (const pile of piles) {
      resH += Math.ceil(pile / x);
    }
    return resH;
  }
  // 二分查找 纵轴：f(x) 吃香蕉时间； 横轴：x (要求的速度)； target = 就是给定的时间 h
  while (rightIndex > leftIndex) {
    // 获取mid下标 
    const midIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2); // 取中值保证下标为整数 所以 这里选择向下取整
    const curH = f(midIndex);
    // mid === target
    if (curH === h) {
      // 落在了target区段 需要right向左逼近最小值
      rightIndex = midIndex;
      continue;
    }
    // mid > target
    if (curH > h) {
      // 落在了target区段的左侧区间 需要left向右逼近 左区间需要步进1 否则容易陷入在left=4, right=3, mid=0的情况下,死循环而无法继续前进 -me: 也就是选择由left进行迫近
      leftIndex = midIndex + 1;
      continue;
    }
    // mid < target
    if (curH < h) {
      // 落在了target区段的右侧区间 需要right向左逼近
      rightIndex = midIndex;
      continue;
    }
  }
  // 返回结果（返回左边界）
  return leftIndex;
};

// test
// minEatingSpeed([3,6,7,11], 8);