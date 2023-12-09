/**
 * leet: https://leetcode-cn.com/problems/remove-element/
 * Date: 2022-2-1
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487466&idx=1&sn=e0c21cf8c3a76cfc4844b1269b658344&scene=21#wechat_redirect
 * 类型：双指针
 *  - 快慢指针，遇到符合条件的 进行覆盖 或者跳过 slow生成最后的结果数组（slow指向结果数组的最后一位）
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  // 防御
  if (!Array.isArray(nums)) return;
  if (typeof val !== 'number') return;
  // 初始化值
  let slowIndex = 0, fastIndex = 0;
  // 核心算法
  while (fastIndex < nums.length) {
    if (nums[fastIndex] !== val) {
      // slowIndex遇到了val 就会在原地等待值!== val的fastIndex进行覆盖 覆盖后会往前走
      nums[slowIndex] = nums[fastIndex];
      slowIndex++;
    }
    fastIndex++;
  }
  // 返回值 这里的slowIndex 因为在上面最后一次赋值非val的值后 还++了 所以 其实slowIndex是去除val后数组的最后一位的下一位 其值也就是length了
  return slowIndex;
};

removeElement([3,2,2,3], 3);