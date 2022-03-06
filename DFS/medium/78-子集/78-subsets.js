/**
 * leet: https://leetcode-cn.com/problems/subsets/
 * 2022-3-6
 * kaer: https://programmercarl.com/0078.%E5%AD%90%E9%9B%86.html#javascript
 */

/**
 * 子集也是一种组合问题
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  // defend
  // init data
  const numsLen = nums.length;
  const result = [];
  // algo
  // 定义：递归回溯函数
  const backtrack = function(path, startIndex) {
      // base case + 记录结果(实际这里的base case可以不return 因为这时候 startIndex已经超过numsLen了 for循环也结束 这个函数也结束了)
      if (startIndex >= numsLen) {
          result.push(path.slice());
          return;
      }

      // 记录一次结果
      result.push(path.slice());

      // 单层遍历逻辑
      for (let i = startIndex; i < numsLen; i++) {
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