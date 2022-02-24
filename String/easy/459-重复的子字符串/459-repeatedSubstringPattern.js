/**
 * leet: https://leetcode-cn.com/problems/repeated-substring-pattern/
 * date: 2022-2-24
 * kaer: https://programmercarl.com/0459.%E9%87%8D%E5%A4%8D%E7%9A%84%E5%AD%90%E5%AD%97%E7%AC%A6%E4%B8%B2.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * KMP方法：首先我们枚举一个周期字符串 看看它的规律：
      a  b  c   a  b  c   a  b  c
next  -1 -1 -1  0  1  2   3  4  5
index 0  1  2   3  4  5   6  7  8

next[len - 1] + 1 = next[8] + 1 = 5 + 1 = 6
len - 3 = 9 - 6 = 3
len % 6 = 9 % 3 = 0 
也就是满足：len % (len - (next[len - 1] + 1)) === 0
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
  // defends
  // init data
  const next = getNext(s);
  const len = s.length;
  // algo 首先 一个循环串必然是一个有相同前后缀的
  if (next[len - 1] !== -1 && len % (len - (next[len - 1] + 1)) === 0) return true;
  // return
  return false;
};

/**
* 构造s的next数组
*/
function getNext(s) {
  const arr = s.split('');
  let j = -1;
  const next = [-1];

  for (let i = 1; i < s.length; i++) {
      while (j >= 0 && arr[i] !== arr[j + 1]) {
          // 回退j: 直到穷尽(回退)j到初始值-1 或者 找到了arr[i]和arr[j]相等的情况
          j = next[j];
      }

      if (arr[i] === arr[j + 1]) {
          j++; // j步进 i在for循环控制条件中步进
      }

      // 每一轮循环其实就是确定next[i] 的值 当前[0,i]无相同前后缀的话 该位置i的next值就是-1
      next[i] = j;
  }

  return next;
}