/**
 * leet: https://leetcode-cn.com/problems/reverse-string-ii/
 * Date: 2022-2-22
 * kaer: https://programmercarl.com/0541.%E5%8F%8D%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2II.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * 分割  与 翻转  拼接
 * 1. 空间 换 时间，分割后反转绕后拼接
 * 2. 双层循环 大循环分割出小循环的字符子串 小循环部分进行一个字符串反转即可
 * 3. 字符串需要先转成array，才能利用下标进行写操作
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var reverseStr = function(s, k) {
  // defend
  // init data
  // 字符串非引用类型 可以先转成数组
  const arr = s.split('');
  const len = s.length;
  // algo
  for (let i = 0; i < len; i += 2 * k) {
      let left = i;
      let right = i + k > len ? len -1 : i + k - 1; // 两两反转 下标和边界是最考验的地方
      while (left < right) {
          const temp = arr[left];
          arr[left] = arr[right];
          arr[right] = temp;
          left++;
          right--;
      }
  }
  
  // return
  return arr.join('');
};