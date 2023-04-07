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
 * 核心就是维护一个滑动窗口的map,该map由 [char, count]这样一组映射组成，记录每个字符在滑动窗口中出现的次数，某个进入的字符数量超过1的时候，就需要缩小窗口进行去重了
 * 时间复杂度：O(N)，其中 N 是字符串的长度。左指针和右指针分别会遍历整个字符串一次。 也就是O(2N)， 简化后就是O(N)
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
  while (rightIndex < s.length) {
    // 将要移进窗口的字符
    const willInChar = s[rightIndex];
    // 更新数据
    windowChar2CountMap.$addCount(willInChar, 1);
    // 该字符还有重复时 需要进一步缩小窗口 => 缩小窗口 直到该窗口无重复字符串
    while (windowChar2CountMap.get(willInChar) > 1) {
      // 将要移出窗口的字符
      const  willOutChar = s[leftIndex];
      // 缩小窗口
      leftIndex++;
      // 更新数据
      windowChar2CountMap.$addCount(willOutChar, -1);
    }
    // 更新下res 此刻的subStr就是无重复字符的
    res = Math.max(res, rightIndex - leftIndex + 1);
    // 等待上面res的计算结束后 再扩大窗口, 进入下一轮循环
    rightIndex++;
  }
  // 返回值
  return res;
};

// test
// lengthOfLongestSubstring("abcabcbb");
console.log(lengthOfLongestSubstring("bbbbb")); // expect 1