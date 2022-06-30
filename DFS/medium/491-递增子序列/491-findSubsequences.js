/**
 * leet: https://leetcode-cn.com/problems/increasing-subsequences/
 * 2022-3-6
 * karl: https://programmercarl.com/0491.%E9%80%92%E5%A2%9E%E5%AD%90%E5%BA%8F%E5%88%97.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * 题型：取有序的子集 + 去重
 * 但是 不能采用排序后去重的方式了
 * @param {number[]} nums
 * @return {number[][]}
 */
 var findSubsequences = function(nums) {
  // defend
  // init data
  const numsLen = nums.length;
  const result = [];

  // algo
  // 定义：递归回溯函数
  const backtrack = function(path, startIndex) {
      const usedSet = new Set(); // 记录当前元素在本层用过
      // 收集结果
      if (path.length >= 2) {
          result.push(path.slice());
      }
      // base case
      if (startIndex >= numsLen) return;

      // 单树层遍历
      for (let i = startIndex; i < numsLen; i++) {
          // [!!!]保持递增的关键实现：判断 如果当前值小于序列的末尾值 就跳过当前遍历 (注意 数组越界 所以 i > 0)
          if (nums[i] < path[path.length - 1]) continue;
          // 去重 如果当前path（子序列）已经包含当前元素 就可以跳过当前元素（因为这个数字，在之前已经由第一个相同的枚举过每种可能了） 如果要追求好的时间复杂度 可以借助Set Map等来处理 这里直接使用数组的includes()
          if (usedSet.has(nums[i])) continue;

          usedSet.add(nums[i]);

          // 作出选择
          path.push(nums[i]);
          // 递归遍历下一层
          backtrack(path, i + 1);
          // 撤销选择
          path.pop();
          
      }
  }
  // 调用：递归回溯函数
  backtrack([], 0);

  // return
  return result;
};