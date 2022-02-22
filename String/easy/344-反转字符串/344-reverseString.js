/**
 * leet: https://leetcode-cn.com/problems/reverse-string/
 * Date: 2022-2-22
 * kaer: https://programmercarl.com/0344.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * 双指针对称交换
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
 var reverseString = function(s) {
  // 防御
  // init data
  let left = 0, right = s.length - 1;
  // algo
  while (left < right) {
      // 绕中点 交换左右2边对称的点
      const temp = s[left];
      s[left] = s[right];
      s[right] = temp;
      // 步进
      left++;
      right--;
  }
};