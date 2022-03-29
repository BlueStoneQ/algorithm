/**
 * leet: https://leetcode-cn.com/problems/jump-game/
 * 2022-3-9
 * kaer: https://programmercarl.com/0055.%E8%B7%B3%E8%B7%83%E6%B8%B8%E6%88%8F.html#%E6%80%9D%E8%B7%AF
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247485087&idx=1&sn=ddbed992e5ad8f1aa3b3d4afcb17889b&scene=21#wechat_redirect
 */

/**
 * * greedy-区间
 *  - 覆盖范围 超过数组长度
 * 贪心：根据题 只要可以跳跃的最大长度超过了数组的长度 就一定可以调到最后一个位置
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
  // defend
  if (nums.length <= 1) return true;
  // init data
  let maxCover = 0; // 可以跳跃的最大长度(其实也是下标值）
  const numsLen = nums.length;
  // algo 注意这里的控制条件 i的上限边界是maxCover （只有在最大的可以跳跃的范围内 才能跳跃，而边界是maxCover 不是 maxCover-1哦 关于边界 可以草纸上画一下即可）
  for (let i = 0; i <= maxCover; i++) {
      // 从位置i 所能跳的最大距离 更新
      maxCover = Math.max(i + nums[i], maxCover);
      if (maxCover >= numsLen - 1) return true; // 说明可以覆盖到终点了
  }
  // return 
  return false;
};