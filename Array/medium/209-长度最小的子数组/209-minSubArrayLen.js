/**
 * 2022-6-9
 * leet: https://leetcode.cn/problems/minimum-size-subarray-sum/
 * kaer: https://programmercarl.com/0209.%E9%95%BF%E5%BA%A6%E6%9C%80%E5%B0%8F%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84.html
 */

/**
 滑动窗口

 和 代码随想录不太一样，以这个为准，比较利于理解

 复杂度分析：
时间复杂度：O(n) 空间复杂度：O(1)
会疑惑为什么时间复杂度是O(n)？
不要以为for里放一个while就以为是O(n^2)啊， 主要是看每一个元素被操作的次数，每个元素在滑动窗后进来操作一次，出去操作一次，每个元素都是被被操作两次，所以时间复杂度是 2 × n 也就是O(n)。

 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
  // defend
  // init data
  let result = Number.MAX_SAFE_INTEGER; // 动态记录最小连续子数组的长度（在滑动的过程中不断更新该值），求最小值，一般使用一个最大值作为初始值，才会启动比较, 或者 这里使用 nums.length + 1, 子数组长度不会超过自身
  let leftIndex = 0, rightIndex = 0; // 滑动窗口的左右边界
  let sum = 0; // 滑动窗口的和，滑动过程中不断更新该值
  // algo
  while (rightIndex < nums.length) {
      // 扩大窗口（right向右前进）
      sum += nums[rightIndex];

      // 缩小窗口（left向右前进）直到窗口和sum < target
      while (sum >= target) {
          // 更新下result 窗口[left, right]长度 = right - left + 1;
          const subArrayLen = rightIndex - leftIndex + 1;
          if (subArrayLen < result) {
              result = subArrayLen;
          }
          // 窗口缩小后 更新sum值
          sum -= nums[leftIndex++];
      }

      // 窗口右边界向前 - 注意 必须放在后面 否则 会影响前面计算
      rightIndex++;
  }
  // return
  return result === Number.MAX_SAFE_INTEGER ? 0 : result;
};