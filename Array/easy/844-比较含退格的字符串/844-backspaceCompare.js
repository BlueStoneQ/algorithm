/**
 * leet: https://leetcode-cn.com/problems/backspace-string-compare/
 * 2022-3-31
 *  题解：https://leetcode-cn.com/problems/backspace-string-compare/solution/shuang-zhi-zhen-bi-jiao-han-tui-ge-de-zi-8fn8/
 */

/**
 * 

 通过双指针 分别得到 s 和 t 经过退格编辑后的字符串

 双指针+模拟法

 复杂度：
 - 时间O(N + M) N M 分别是 s t 的长度
 - 空间O(1)

 题解：https://leetcode-cn.com/problems/backspace-string-compare/solution/shuang-zhi-zhen-bi-jiao-han-tui-ge-de-zi-8fn8/

 
 @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s, t) {
  // defend
  // init data
  const BACK_SIGN = '#';
  const sLen = s.length, tLen = t.length;
  let sSkip = 0, tSkip = 0; // 动态记录当前遇到的#的个数 也就是当前需要删除的元素的个数
  // 需要倒序 因为#会删除前面相邻的元素 倒序的话 遇到#后 我们可以处理#删除的元素了
  let i = sLen - 1, j = tLen - 1;
  // algo 大循环
  while (i >= 0 || j >= 0) {
      // 遍历s 进行当前的删除操作
      while (i >= 0) {
          if (s[i] === BACK_SIGN) {
              // 计数按了多少次退格
              sSkip++;
              i--;
          } else if (sSkip > 0) {
              // 删除一个#之前的元素
              sSkip--;
              i--;
          } else {
              // 遇到一个最终会保留的元素 停止遍历 i指向这个保留元素 会在下面进行对比
              break;
          }
      }
      // 遍历t 进行删除操作
      while (j >= 0) {
          if (t[j] === BACK_SIGN) {
              tSkip++;
              j--;
          } else if (tSkip > 0) {
              tSkip--;
              j--;
          } else {
              break;
          }
      }
      // 最终会保留的同位置的元素 比较下 如果不同 则最终结果的2个字符串必然不会相等
      if (s[i] !== t[j]) return false;
      // 指针步进
      i--;
      j--;
  }

  // return
  return true;
};