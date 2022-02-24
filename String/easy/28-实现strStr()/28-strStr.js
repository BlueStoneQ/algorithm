/**
 * leet: https://leetcode-cn.com/problems/implement-strstr/
 * Date: 2022-2-24
 * kaer: https://programmercarl.com/0028.%E5%AE%9E%E7%8E%B0strStr.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * KMP 经典题目
 * KMP的经典思想就是:当出现字符串不匹配时，可以记录一部分之前已经匹配的文本内容，利用这些信息避免从头再去做匹配。
 * 模式串与前缀表对应位置的数字表示的就是：下标i之前（包括i）的字符串中，有多大长度的相同前缀后缀。
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
  // defend
  if (needle === '') return 0;
  // init data
  const next = getNext(needle);
  let j = -1;
  // algo
  for (let i = 0; i < haystack.length; i++) {
      // 当前字符不一样 通过next确定回退点（neddle要下一轮开始比较的下标起点j）如果不相同 需要一直在next中回退 直到next最开始
      while (j >= 0 && needle[j + 1] !== haystack[i]) {
          j = next[j];
      }
      // 当前字符一致 通过next确定j(needle下一轮开始比较的下标起点)
      if (needle[j + 1] === haystack[i]) {
          j++; // 和i共同步进 i在上面for循环控制条件中步进
      }
      // haysatck已经匹配了needle：就是j已经走到了needle的末尾 此时返回起点下标：j - needle.length
      if (j === needle.length - 1) {
          return i - needle.length + 1;
      }
  }
  // return
  return -1;
};

/**
* 构造next数组：前缀表 - 1 
*/
function getNext(patternArr) {
  // 初始化结果
  const next = [];
  // 初始化下标 和 next数组
  let j = -1;
  next[0] = j;
  // 遍历模式串
  for (let i = 1; i < patternArr.length; i++) {
      // 当前值和之前的最大公共前后缀的末点值是否相同：不同 j回退
      // 这里需要j >= 0 是要保证next[j]有意义
      while (j >= 0 && patternArr[i] !== patternArr[j + 1]) {
          j = next[j];
      }
      // 当前值和之前的最大公共前后缀的末点值是否相同：相同 i j继续步进
      if (patternArr[i] === patternArr[j + 1]) {
          j++;
      }
      next[i] = j;
  }
  // return
  return next;
}