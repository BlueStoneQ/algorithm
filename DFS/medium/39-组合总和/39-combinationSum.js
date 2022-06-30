/**
 * leet: https://leetcode-cn.com/problems/combination-sum/
 * Date: 2022-3-2
 * kaer: https://prrogrammercarl.com/0039.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8C.html#%E5%89%AA%E6%9E%9D%E4%BC%98%E5%8C%96
 */

/**
 * 
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  // defend
  // init data
  const res = [];
  candidates.sort((a, b) => a - b); // 为了配合后面的剪枝，而不是为了去重
  // algo
  // 定义回溯函数
  const backTrack = (path, preSum, startIndex) => {
      // base case1: 剪枝 preSum > target 就不必要再继续探索路径了
      if (preSum > target) return;
      // base case2: + 记录结果
      if (preSum === target) {
          res.push(path.slice());
          return;
      }
      // 遍历当前层
      for (let i = startIndex; i < candidates.length; i++) {
          const curNum = candidates[i];
          // 剪枝：其实如果已经知道下一层的sum会大于target，就没有必要进入下一层递归了。
          // 对总集合”排序“之后，如果下一层的sum（就是本层的 sum + candidates[i]）已经大于target，就可以结束本轮for循环的遍历。继续循环下去的值 都会到下一层的preSum > target 中结束 所以 可以提前结束 避免多一层递归
          if (curNum + preSum > target) break; 
          // 作出选择
          path.push(curNum);
          // 遍历下一层
          backTrack(path, preSum + curNum, i); // [!!!]本题元素为可重复选取的: 关键点:不用i+1了，表示可以重复读取当前的数
          // 撤销选择
          path.pop();
      }
  }
  // 调用回溯函数
  backTrack([], 0, 0);

  // return
  return res;
};