/**
 * leet: https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 * Date: 2022-2-22
 * kaer: https://programmercarl.com/%E5%89%91%E6%8C%87Offer05.%E6%9B%BF%E6%8D%A2%E7%A9%BA%E6%A0%BC.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * me: 简单方法
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
  // defend
  // init data
  // 字符串数组化
  const arr = s.split('');
  const len = s.length;
  // algo
  for (let i = 0; i < len; i++) {
      if (arr[i] === ' ') {
          arr[i] = '%20';
      }
  }
  // return 
  return arr.join('');
};