/**
 * leet： https://leetcode-cn.com/problems/minimum-insertions-to-balance-a-parentheses-string/
 * Date： 2022-2-15
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487246&idx=1&sn=4a514020ce9dc8777e2d1d503188b62b&scene=21#wechat_redirect
 */

/**
 * @param {string} s
 * @return {number}
 */
 var minInsertions = function(s) {
  // defend
  // init data
  let leftNeed = 0, rightNeed = 0; // 对左右括号的需求数量
  // algo
  for (let i = 0; i < s.length; i++) {
      const curChar = s[i];
      // case1 curChar是左括号
      if (curChar === '(') {
          rightNeed += 2;

          // case 1.1 右括号需求数为奇数
          if (rightNeed % 2 === 1) {
              leftNeed++; // 计数：插入一个左括号
              rightNeed--;  // 对右括号的需求-1
          }
      }
      // case2 curChar是右括号
      if (curChar === ')') {
          rightNeed--;

          // case 2.1 右括号多出一个
          if (rightNeed === -1) {
              leftNeed++; // 计数：插入了一个左括号
              rightNeed = 1; // 因为一个左括号插入 需要2个右括号 2 - 1 = 1
          }
      }
  }
  // return 
  return leftNeed + rightNeed;
};