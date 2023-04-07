/**
 * leet: https://leetcode-cn.com/problems/permutations-ii/
 * 这道题在去重那里 理解的不是很好 需要多画图 理解下
 * 2022-3-7
 * kaer: https://programmercarl.com/0047.%E5%85%A8%E6%8E%92%E5%88%97II.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 * 讲得比较清楚的题解：https://leetcode-cn.com/problems/permutations-ii/solution/hui-su-suan-fa-python-dai-ma-java-dai-ma-by-liwe-2/
 */

/**
 * 1. nums可能包含重复数字, 所以这里涉及到去重
 * - 去重：排序后利用重复元素相邻去重
 * - 利用第三方变量进行记录和去重：
 * - 这道题是建立在46题的传统全排列的基础之上 增加了去重的处理
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
  // defend
  // init data
  const numsLen = nums.length;
  nums.sort((a, b) => a - b); // ⭕️排序！！！！ 排序是为了后面的去重 将相同的元素变成相邻的 方便后面去重
  const result = [];
  // algo
  /**
   * 定义：递归回溯函数
   * @param {array} usedArry 下标是数字，value是标记该值是否使用过，true代表使用过
   */
  const backtrack = function(path, usedArry) {
      // base case + 记录结果
      if (path.length === numsLen) {
          result.push(path.slice());
          return;
      }

      // 单树层遍历
      for (let i = 0; i < nums.length; i++) {
          // 判重 去重：树层去重, 在排序后重复元素相邻之外 还有一个判断：usedArry[i - 1] === false 这样的话 下面的树枝去重 就无法剪掉这个分支 所以 在这里剪掉；这样条件是为了保留下 某些前面元素已经使用 但是它的分支还未递归尽或者回溯 这样的话 这个分支就是应该遍历的 
          // 如果这个数和之前的数一样，并且之前的数还未使用过（说明已经回溯过）
          // 这里的这个去重 就是和46题最大处理不同，结合前面的排序：
            // 1. i > 0 是为了保证后面i - 1为有效下标
            // 2. nums[i] === nums[i - 1], 证明前后2个相邻元素是一样的 那么他们延伸下的路径 也必然是一样的 需要去掉
            // 3. 去重还有个前提 必须保证前一个元素是刚刚撤销的 这样的话 证明前一个相邻的相同元素已经枚举过其所有可能了 这次这个相同的元素 就不用枚举了
                // usedArry[i - 1] === false 代表i - 1刚刚被撤销过，未被标记过的 usedArry[i - 1] === undefined
                // 避免过度剪枝: 在[1,1,2]中, 枚举到[1,1]的时候，如果没有usedArry[i - 1] === false，则这里第二个[1,1]就会被剪枝掉，无法枚举出来
          if (i > 0 && nums[i] === nums[i - 1] && usedArry[i - 1] === false) continue; 

          // 这里是树枝去重:经典传统的全排列去重
          if (usedArry[i] === true) continue;

          // 作出选择
          path.push(nums[i]);
          usedArry[i] = true;
          // 遍历下一层
          backtrack(path, usedArry);
          // 撤销选择
          path.pop();
          usedArry[i] = false; // 所以 上面的判定 usedArray[i - 1] === false 则代表刚刚相邻的前一个节点 是刚被撤销标记的 相邻的相同元素 是需要去重的
      }
  }
  // 调用：递归回溯函数
  backtrack([], []);
  // return 
  return result;
};