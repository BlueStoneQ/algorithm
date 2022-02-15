/**
 * leet: https://leetcode-cn.com/problems/minimum-add-to-make-parentheses-valid/
 * Date: 2022-2-15
 * dong: https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247487246&idx=1&sn=4a514020ce9dc8777e2d1d503188b62b&scene=21#wechat_redirect
 * 频率较低 但是思路很有意思
 */

/**
 * @param {string} s
 * @return {number}
 */
 var minAddToMakeValid = function(s) {
  // defend
  // init data
  let leftNeed = 0, rightNeed = 0; // 对左右括号的依赖数
  // algo
  for (let i = 0; i < s.length; i++) {
      const curChar = s[i];
      // 如果当前字符是 (
      if (curChar === '(') {
          rightNeed++;
      };
      // 如果当前字符是 (
      if (curChar === ')') {
          // 遇到了一个右括号 则对右括号的需求数可以减一
          rightNeed--;

          //右括号需求数为-1 则证明右括号多余左括号一个 leftNeed需要+1
          if (rightNeed === -1) {
              rightNeed = 0; // 复位
              leftNeed++;
          }
      };  
  }
  // return 对左右括号的需要数总和
  return leftNeed + rightNeed; 
};