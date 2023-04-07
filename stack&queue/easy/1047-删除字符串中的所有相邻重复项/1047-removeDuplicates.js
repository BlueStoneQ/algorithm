/**
 * leet: https://leetcode-cn.com/problems/remove-all-adjacent-duplicates-in-string/
 * Date: 2022-2-15
 * kaer: https://programmercarl.com/1047.%E5%88%A0%E9%99%A4%E5%AD%97%E7%AC%A6%E4%B8%B2%E4%B8%AD%E7%9A%84%E6%89%80%E6%9C%89%E7%9B%B8%E9%82%BB%E9%87%8D%E5%A4%8D%E9%A1%B9.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * 方法1: 栈匹配
 * 可以把字符串顺序放到一个栈中，然后如果相同的话 栈就弹出，这样最后栈里剩下的元素都是相邻不相同的元素了
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
  // defend
  // init data
  const stack = [];
  // algo
  for (const char of s) {
      // 和栈顶相同的 则pop出栈顶
      if (stack[stack.length - 1] === char) {
          stack.pop();
          continue;
      }
      // 和栈顶不同的 则入栈
      stack.push(char);
  }
  // 经过以上去除 栈里就是相邻不重复的元素了
  // return 
  return stack.join('');
};