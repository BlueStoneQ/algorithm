/**
 * leet: https://leetcode-cn.com/problems/combinations/
 * 2022-3-1
 * https://programmercarl.com/0077.%E7%BB%84%E5%90%88.html#javascript
 */

/**
 * 以该版为参考：
 * DFS+startIndex 这是解决组合问题的通用模版
 * 
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
// defend
// init data
const res = [];
// algo

// 1. 回溯函数的定义 入参 返回值
const _combine = (path, startIndex) => {
    // 2. base case: k其实就是多叉树的深度
    if (path.length === k) {
        res.push(path.slice());
        return;
    }

    // 遍历当前层
    // 注意：排列这里i就是0开始，组合 是从startIndex开始的
    for (let i = startIndex; i <= n; i++) {
        // todo: 剪枝 去重
        // 做出选择
        path.push(i);
        // 递归回溯
        _combine(path, i + 1);
        // 撤销选择
        path.pop();
    }
}

_combine([], 1);
// return 
return res;
};


 /**
  * 
  * 初版方法：通用性不强，性能不优-频繁slice 应该采用更通用的startIndex来标记状态
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