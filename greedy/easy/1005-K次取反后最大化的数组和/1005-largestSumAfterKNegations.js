/**
 * leet: https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations/
 * 2022-3-24
 * kaer: https://programmercarl.com/1005.K%E6%AC%A1%E5%8F%96%E5%8F%8D%E5%90%8E%E6%9C%80%E5%A4%A7%E5%8C%96%E7%9A%84%E6%95%B0%E7%BB%84%E5%92%8C.html#%E6%80%9D%E8%B7%AF
 */

/**

解题步骤为：

第一步：将数组按照绝对值大小从大到小排序，注意要按照绝对值的大小
第二步：从前向后遍历，遇到负数将其变为正数，同时K--
第三步：如果K还大于0，那么反复转变数值最小的元素，将K用完
第四步：求和


贪心的思路，局部最优：让绝对值大的负数变为正数，当前数值达到最大，整体最优：整个数组和达到最大。

局部最优可以推出全局最优。

那么如果将负数都转变为正数了，K依然大于0，此时的问题是一个有序正整数序列，如何转变K次正负，让 数组和 达到最大。

那么又是一个贪心：局部最优：只找数值最小的正整数进行反转，当前数值可以达到最大（例如正整数数组{5, 3, 1}，反转1 得到-1 比 反转5得到的-5 大多了），全局最优：整个 数组和 达到最大。


 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function(nums, k) {
  // defend
  // init data
  const numsLen = nums.length;
  nums.sort(compareInAbs); // 1 排序
  // algo
  // 2 遍历 大 -> 小 绝对值大的负数优先变正
  for (let i = 0; i < numsLen; i++) {
      if (nums[i] < 0 && k > 0) {
          nums[i] *= -1;
          k--; // 消耗一次机会
      }
  }

  // 3 k>0时 用最小值反复消耗掉k (这里也可以用k对2取余的方法 一步就到达最后结果 最后结果 无非正负 也就是 k的就决定了nums[len - 1]的正负)
  while (k > 0) {
      nums[numsLen - 1] *= -1;
      k--;
  }

  // return 4. 求和
  return nums.reduce((preVal, curVal) => preVal + curVal, 0);
};

/**
* 比较2个数字的绝对值大小 - sort中的copareFn 逆序
* @return {Number}
*  num2 > num1 return > 0 需要逆序 num2 num1
* num2 < num1 return < 0  保持顺序 num1 num2
* num1 === num2 return 0 顺序不变 num1 num2
*/
function compareInAbs(num1, num2) {
  return Math.abs(num2) - Math.abs(num1);
}