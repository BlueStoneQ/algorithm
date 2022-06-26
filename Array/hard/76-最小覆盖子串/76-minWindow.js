/**
 * leet: https://leetcode-cn.com/problems/minimum-window-substring/
 * Date: 2022-1-30
 * 类型： 滑动窗口
 * todo：
 * 1. 写一个更清晰的版本 将判断是否为子串的动作 封装为一个单独函数 同时 注意效率
 */


 (() => {
  // 重写一个计数用的Map方法
  Map.prototype.$addCount = function(key, val) {
    const originalCharCount = this.get(key) || 0;
    this.set(key, originalCharCount + val);
  }
})()

/**
 * 滑动窗口
 * 1. me: valid的问题 - 判断是否为子串的问题
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  // 防御
  if (typeof s !== 'string') return;
  if (typeof t !== 'string') return;
  if (s.length < t.length) return '';
  // 初始化值
  let resStart = 0, resEnd = Number.MAX_VALUE; // 记录最小子串的起终点
  let LIndex = 0, RIndex = 0;
  let valid = 0; // window中满足t要求的字符的个数, 主要用来判断是否子串是否覆盖t
  const windowChar2CountMap = new Map(); // Map 滑动窗口中字符:该字符出现的次数
  const tChar2CountMap = new Map(); // Map 需要匹配的串t中字符:该字符出现的次数
  for (let i = 0; i < t.length; i++) {
    const curChar = t[i];
    tChar2CountMap.$addCount(curChar, 1);
  }
  // 核心算法
  while (RIndex < s.length) {
    // curChar 是即将移入window的字符
    const curChar = s[RIndex];
    // 判断当前字符是否在t中 yes: 更新窗口内一系列数据
    if (tChar2CountMap.has(curChar)) {
      // 更新window的数量计数表
      windowChar2CountMap.$addCount(curChar, 1);
      // 更新valid计数
      if (windowChar2CountMap.get(curChar) === tChar2CountMap.get(curChar)) {
        valid++;
      }
    }
    // 判断窗口需要缩小: 当前窗口已经覆盖了t 需要缩小窗口来寻找最小子串
    while (valid === tChar2CountMap.size) {
      // 更新下最小覆盖子串记录 这里我们更新下子串的startIndex len
      if (RIndex - LIndex < resEnd - resStart) {
        // 这里是一个比之前覆盖子串长度len更小的子串 更新下最小覆盖子串的坐标(为当前窗口)
        resStart = LIndex;
        resEnd = RIndex;
      }
      // 将要移出window的字符
      const willDelChar = s[LIndex];
      // 缩小窗口：左边界向右滑动 (willDelChar此刻就移出窗口了)
      LIndex++;
      // 进行窗口中的一系列数据更新 一旦将有效的字符滑出去了 且 之前是window中的该字符和t中的该字符数量相等 此刻window就不完全覆盖t了 则退出缩小窗口的循环
      if (tChar2CountMap.has(willDelChar)) {
        // 更新有效值计数
        if (windowChar2CountMap.get(willDelChar) === tChar2CountMap.get(willDelChar)) valid--;
      }
      // 更新window计数器
      windowChar2CountMap.$addCount(willDelChar, -1);
    }
  
    // 扩大窗口：右边界向右滑动
    RIndex++;
  }
  // 返回值 这里resEnd不用考虑是因为resEnd在窗口滑动过程中已经
  return resEnd === Number.MAX_VALUE ? '' : s.substring(resStart, resEnd + 1);
};

module.exports = minWindow;