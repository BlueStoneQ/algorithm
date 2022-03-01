/**
 * leet: https://leetcode-cn.com/problems/combinations/
 * 2022-3-1
 * https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html#javascript
 */

 /**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
  // defend
  // init data
  const res = [];
  const arr = new Array(n);
  for (let i = 0; i < n; i++) {
      arr[i] = i + 1; // 题目要求 [1, n]
  }

  // algo
  // 1. 定义回溯函数（递归）
  const backTrack = (path, selectList) => {
      // base case + 记录一次结果
      if (path.length === k) {
          res.push(path.slice()); // 引用类型 注意复制 防止引用类型后续操作对结果污染
          return;
      }

      // 遍历当前层 枚举每个情况 (这里缩小选择范围后 其实就已经剪枝了)
      for (let i = 0; i < selectList.length; i++) {
          const num = selectList[i];
          // 作出选择
          path.push(num);
          // 向下遍历: 每次从集合中选取元素，可选择的范围随着选择的进行而收缩，调整可选择的范围。
          backTrack(path, selectList.slice(i + 1));
          // 撤销选择：回溯
          path.pop();
      }
  }

  backTrack([], arr);

  // return 
  return res;
};