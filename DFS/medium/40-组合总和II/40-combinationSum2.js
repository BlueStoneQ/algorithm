/**
 * leet: https://leetcode-cn.com/problems/combination-sum-ii/
 * 2022-3-3
 * kaer: https://programmercarl.com/0040.%E7%BB%84%E5%90%88%E6%80%BB%E5%92%8CII.html#javascript
 * 题解：https://leetcode-cn.com/problems/combination-sum-ii/solution/ren-zhe-suan-fa-quan-wang-zui-qing-xi-yi-28qx/
 */

/**
 * 回溯 + 排序去重
 * 组合 与 排列 的区别： 在代码中的体现就是，排列问题每次通过 contains 方法来排除在 track 中已经选择过的数字；而组合问题通过传入一个 start 参数，来排除 start 索引之前的数字。
 * 
 * -  * 这道题和39题的最大区别在于：39题candidates本身是没有重复元素的，而本题candidates是含有重复元素，
 *  这种含有重复元素的集合，一般都是排序（让相邻的挨在一起）+ candidates[i ] === candidates[i - 1] 来去重
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
  // defend
  // init data
  const res = [];
  candidates.sort((a, b) => a - b); // 为了配合后面的剪枝，去重 - 排序之后的元素特点：重复的元素总是相邻的
  // algo
  // 定义回溯函数
  const backTrack = (path, pathSum, startIndex) => {
      // base case1: 剪枝 preSum > target 就不必要再继续探索路径了
      if (pathSum > target) return;
      // base case2: + 记录结果
      if (pathSum === target) {
          res.push(path.slice());
          return;
      }
      // 遍历当前层
      for (let i = startIndex; i < candidates.length; i++) {
          const curNum = candidates[i];
          // 去重-方式1: 跳过重复项 当前项 和 前一项相同
          if (i > startIndex && curNum === candidates[i - 1]) {
              continue;
          }
          // 剪枝：其实如果已经知道下一层的sum会大于target，就没有必要进入下一层递归了。
          // 对总集合”排序“之后，如果下一层的sum（就是本层的 sum + candidates[i]）已经大于target，就可以结束本轮for循环的遍历。继续循环下去的值 都会到下一层的preSum > target 中结束 所以 可以提前结束 避免多一层递归
          if (curNum + pathSum > target) break; 
          // 作出选择
          path.push(curNum);
          // 遍历下一层: 本题元素为在每个组合中只能使用一次 这里就需要 + 1了
          backTrack(path, pathSum + curNum, i + 1); 
          // 撤销选择
          path.pop();
          // 去-重方式2：组合不能重复 所以 需要跳过相邻的重复项(同时确保下标不要越界, 因为下面会进行i++) - 这里的这个判断 也可以写成：放在开头 + break
        //   while (i < candidates.length - 1 && candidates[i] === candidates[i + 1]) {
        //       i++; // candidates[i + 1]也是重复元素 为什么会跳过candidates[i + 1]呢 因为进入下一次循环的时候 会在循环控制条件里执行一次i++ 这样就等于直接到了 i + 2, 跳过了重复的i + 1
        //   }
      }
  }
  // 调用回溯函数
  backTrack([], 0, 0);

  // return
  return res;
};