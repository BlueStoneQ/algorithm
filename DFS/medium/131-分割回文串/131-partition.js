/**
 * leet: https://leetcode-cn.com/problems/palindrome-partitioning/
 * 2022-3-3
 * kaer: https://programmercarl.com/0131.%E5%88%86%E5%89%B2%E5%9B%9E%E6%96%87%E4%B8%B2.html#javascript
 */


/**
 * 切割问题本质上是一种组合问题
 * 时间: O()
 * 空间：O()
 * 
 * 先学会切割，切割的框架, 然后再考虑
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
  // defend
  // init data
  const result = [];
  // algo
  // 定义：回溯递归函数
  const backTrack = function(path, startIndex) {
      // base case + 判断 并记录结果（每一个结果：其实是一个数组 该数组代表着一种切割方法）
      if (startIndex >= s.length) {
          result.push(path.slice());
          return;
      }
      // 单层搜索逻辑
      for (let i = startIndex; i < s.length; i++) {
          // 防止越界
          // if (i === s.length - 1) return;
          // [切割的关键操作！！！]切割出当前子串
          const curStr = s.substring(startIndex, i + 1); // 这里会不会越界呢？- 不会，这里i的最高值就是len - 1, subString截取的最远空间是[startIndex, len)，开区间,不会访问到s[len]的
          // 如果当前子串不是回文 则结束本次遍历 进入下一次循环
          if (!isPalindrome(curStr)) continue; // 不是回文串 则进入下一轮循环
          // 如果当前子串是回文 则加入到path中
          // 作出选择
          path.push(curStr);
          // 递归遍历下一层
          backTrack(path, i + 1);
          // 撤销选择
          path.pop();
      }
  }
  // 调用：回溯递归函数
  backTrack([], 0);
  // return 
  return result;
};

// 判断该字符串是不是回文串
function isPalindrome(str) {
  if (str.length <= 1) return true;

  let left = 0, right = str.length - 1;

  while (left < right) {
      if (str[left] !== str[right]) return false;
      // 步进
      left++;
      right--;
  }

  // 通过上面层层检查 等于true
  return true;
}