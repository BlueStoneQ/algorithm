/**
 * leet: https://leetcode-cn.com/problems/reverse-words-in-a-string/
 * Date: 2022-2-22
 * kaer: https://programmercarl.com/0151.%E7%BF%BB%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2%E9%87%8C%E7%9A%84%E5%8D%95%E8%AF%8D.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * 进阶才是可看的：请尝试使用 O(1) 额外空间复杂度的原地解法
 * @param {*} s 
 * @returns 
 */

/**
 * 方法1：水题 不值一看
 * 其实就是子串反转的一种类型 找到边界 反转子串
 * 如果不对时间空间复杂度要求 这道题就是一道水题了
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
  // defend
  // init data
  const arr = s.trim().split(/\s+/); // 使用正则 可以匹配多个空格
  let left = 0, right = arr.length - 1;
  // algo
  while(left < right) {
      // 交换
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      // 步进
      left++;
      right--;
  }
  // return 
  return arr.join(' ');
};