/**
 * leetCode: https://leetcode-cn.com/problems/two-sum/submissions/
 * Date: 2022-1-28
 * me:
 * 1. 暴力解法：双循环遍历
 * 2. 一般查重：构造Set，数据信息要求更多的，例如出现次数之类的，可以使用Map
 * 2. // 查重：一般使用hash, 先构造进hashMap中[ num: numCount ], numCount为该num出现的次数，再单层遍历看是否存在于hashMap中
 */

/**
 * 构造Set进行查重
 * 1. 时间复杂度：O(n)
 * 2. 空间复杂度：O(n) set的大小
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
  // 防御
  if (!nums) return;
  if (nums.length <= 1) return;
  // 变量初始化
  const num2CountSet = new Set();
  // 核心算法
  // 构造Set
  for (num of nums) {
    // 发现已经加入Set的 就代表重复了
    if (num2CountSet.has(num)) return num;
    // 未加入Set的元素可以加入Set
    num2CountSet.add(num);
  }
};

module.exports = findRepeatNumber;