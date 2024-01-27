/**
 * leet: https://leetcode-cn.com/problems/subsets-ii/
 * 2022-3-6
 * kaer: https://programmercarl.com/0090.%E5%AD%90%E9%9B%86II.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * 要充分理解“树枝去重” 和 “数层去重”
 * 组合不能重复，但是组合内的元素可以重复
 * 这就是典型的 树层去重
 * 树层去重：排序 - 使重复元素相邻 然后利用while循环跳过相邻重复的元素，+ startIndex
 * 其实：树层去重 本质就是集合内相同的元素 不能重复在同一层重复使用，其实used也可以用，但是组合类问题一定要用startIndex
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
  // defend
  // init data
  const numsLen = nums.length;
  const result = [];
  // 因为要树层去重 需要排序 使重复元素相邻
  nums.sort((a, b) => a - b);
  // algo
  // 定义：递归回溯函数
  const backtrack = function(path, startIndex) {
      // base case + 记录结果
      if (startIndex >= numsLen) return;

      // 同样：子集问题 求的每个节点 每个节点都需要push
      result.push(path.slice());

      // 单层遍历
      for (let i = startIndex; i < numsLen; i++) {
          // 书层：去重：当前元素和上一个相同 则跳过
          //  i > startIndex 是为了保证后面 i - 1下标有效
          if (i > startIndex && nums[i] === nums[i - 1]) {
            continue;
          }

          // 作出选择
          path.push(nums[i]);
          // 递归遍历下一层
          backtrack(path, i + 1);
          // 撤销选择
          path.pop();

          // while循环 对排序后重复（=相邻）元素进行下标跳过
         //   while(i < numsLen - 1 && nums[i] === nums[i + 1]) i++; // i + 1会被跳过 在下一层循环控制条件中 会 i + 1
      }
  }
  // 调用：递归回溯函数
  backtrack([], 0);
  // return
  return result;
};