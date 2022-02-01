/**
 * leet: https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * Date: 2022-1-31
 * 类型: 滑动窗口
 */

(() => {
  // 重写一个计数用的Map方法
  Map.prototype.$addCount = function(key, val) {
    const originalCharCount = this.get(key) || 0;
    this.set(key, originalCharCount + val);
  }
})()


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  // 防御
  if (typeof s !== 'string') return;
  // 初始化值
  let res = 0;
  let leftIndex = 0, rightIndex = 0;
  const windowChar2CountMap = new Map(); // 记录窗口中每个字符的数量
  // 核心算法
  // 判定不含有重复字符
  // 滑动窗口遍历 注意边界：保证right能访问到最后一个元素 但是下标不要越界 可以举边界的例子 代进去 即可弄清楚
  while (s.length > rightIndex) {
    // 将要移进窗口的字符
    const willInChar = s[rightIndex];
    // 扩大窗口
    rightIndex++;
    // 更新数据
    windowChar2CountMap.$addCount(willInChar, 1);
    // 该字符还有重复时 需要进一步缩小窗口
    while (windowChar2CountMap.get(willInChar) > 1) {
      // 将要移出窗口的字符
      const  willOutChar = s[leftIndex];
      // 缩小窗口
      leftIndex++;
      // 更新数据
      windowChar2CountMap.$addCount(willOutChar, -1);
    }
    // 更新下res 此刻的subStr就是无重复字符的
    res = Math.max(res, rightIndex - leftIndex);
  }
  // 返回值
  return res;
};

// test
// lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbbb");