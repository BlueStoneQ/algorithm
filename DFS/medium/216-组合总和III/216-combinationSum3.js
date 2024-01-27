/**
 * leet: https://leetcode-cn.com/problems/combination-sum-iii/
 * Date: 2022-3-2
 * kaer: https://programmercarl.com/0216.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8CIII.html#%E5%89%AA%E6%9E%9D
 */

/**
 * 
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
 var combinationSum3 = function(k, n) {
  //defend
  // init data
  const res = [];

  // algo
  // 1. 定义回溯函数
  const backTrack = (path, preSum, startIndex) => {
      
      // base case1 [剪枝：剪掉后续所有sum > n的path]当前序列的和已经大于n了 后面的逻辑就是不必要的了 剪枝：可以提前结束接下来不必要的计算
      if (preSum > n) return;

      // base case2 + 记录结果
      if (path.length === k) {
          if (preSum === n) {
              res.push(path.slice());
          }
          return;
      }

      // 多叉树遍历
      for (let i = startIndex; i <= 9; i++) {
          // 作出选择
          path.push(i);
          // 递归调用 遍历下一层
          backTrack(path, preSum + i, i + 1);
          // 撤销选择
          path.pop();
      }
  }

  // 调用 递归函数 startIndex的起点为1 [1, 9]
  backTrack([], 0, 1);

  // return 
  return res;
};