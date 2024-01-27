/**
 * leet: https://leetcode-cn.com/problems/zuo-xuan-zhuan-zi-fu-chuan-lcof/ 
 * Date: 2022-2-23
 * kaer: https://programmercarl.com/%E5%89%91%E6%8C%87Offer58-II.%E5%B7%A6%E6%97%8B%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.html
 * 《剑指offer》: p287
 */

/**
 * 方法2： 局部反转
 * 题型：局部反转
 * 进阶：为了让本题更有意义，提升一下本题难度：不能申请额外空间，只能在本串上操作。
 * 思路：使用整体反转+局部反转就可以实现，反转单词顺序的目的
 * 一些同学热衷于使用substr，来做这道题。 其实使用substr 和 反转 时间复杂度是一样的 ，都是$O(n)$，但是使用substr申请了额外空间，所以空间复杂度是$O(n)$，而反转方法的空间复杂度是$O(1)$。
如果想让这套题目有意义，就不要申请额外空间。
* ?? 但是这个解法也不对 使用Array化后 也申请了额外的空间
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  // defend
  // init data
  const arr = s.split('');
  const len = arr.length;
  // 辅助函数：反转[start,end]的局部字符串
  const _reverse = function(start, end) {
      let left = start, right = end;
      while (left < right) {
          const temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;

          left++;
          right--;
      }
  }
  // algo
  // 1. 翻转整个字符串 abcde => edcba,剩下2步的顺序不影响结果 me: 其实也可以局部翻转 再整体翻转 其实是一样的
  _reverse(0, len - 1);
  // 2. 翻转 之前的前半部分字符串[0,n - 1] 下标映射翻转后的[len - n, len - 1], 也就是 edcab
  _reverse(len - n, len - 1);
  // 3. 翻转 之前的后半部分[n, len - 1] 下标映射翻转后的[0, len - n - 1], 也就是 cdeab
  _reverse(0, len - n - 1);
  // return
  return arr.join('');
};


/**
 * 方法1
 * 1. 最朴素的思路：就是用subString将字符串分成2部分 然后重新拼接下
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function(s, n) {
  // defend
  // init data
  const str1 = s.substring(0, n);
  const str2 = s.substring(n);
  // algo
  // return 
  return str2 + str1;
};