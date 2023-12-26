/**
 * leet: https://leetcode-cn.com/problems/valid-parentheses/
 * Date: 2022-2-15
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487246&idx=1&sn=4a514020ce9dc8777e2d1d503188b62b&scene=21#wechat_redirect
 * kaer: https://programmercarl.com/0020.%E6%9C%89%E6%95%88%E7%9A%84%E6%8B%AC%E5%8F%B7.html#%E9%A2%98%E5%A4%96%E8%AF%9D
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  // defend
  // init data
  const stack = [];
  const right2LeftMap = new Map([
      [')', '('],
      ['}', '{'],
      [']', '[']
  ]); // 左括号 到 右括号 的映射

  // algo
  for (let i = 0; i < s.length; i++) {
      const curChar = s[i];
      // 判断为左括号 入栈
      if (['(', '{', '['].includes(curChar)) {
          stack.push(curChar);
          continue;
      }
      // 判断为右括号 则取其对应的左括号和栈顶比较 相同时则匹配 栈顶出栈
      if ([')', '}', ']'].includes(curChar)) {
          const left = right2LeftMap.get(curChar);
          if (stack.length === 0 || left !== stack.pop()) return false;
      }
  }
  // return 通过考验 并且栈为空 则返回true ⭕️
  return stack.length === 0 ? true : false;
};