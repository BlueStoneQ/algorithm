/**
 * leet: https://leetcode-cn.com/problems/ti-huan-kong-ge-lcof/
 * Date: 2022-2-22
 * kaer: https://programmercarl.com/%E5%89%91%E6%8C%87Offer05.%E6%9B%BF%E6%8D%A2%E7%A9%BA%E6%A0%BC.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

/**
 * 方法1：me: 简单方法， 甚至用一个replace即可
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

/**
 * 方法2：双指针-倒序填充
 * 面试版方法：面试想要考察的是双指针+填充
 * - 其实很多数组填充类的问题，都可以先预先给数组扩容带填充后的大小，然后在从后向前进行操作。
 * - 这道题这样做 不是实用价值 而是掌握这种双指针倒序填充的方法
 */
var replaceSpace = function(s) {
    // defend
    // init data
    const BlANK = ' ';
    // 字符串数组化
    const arr = s.split('');
    const len = s.length;
    let blankCount = 0; // 空格数量
    for (const item of arr) {
        if (item === ' ') {
            blankCount++;
        }
    }

    let leftIndex = len - 1;
    let rightIndex = len - 1 + blankCount * 2; // 空格 由原来1个字符 变成 3个字符 增加了count * 2个字符
    // algo
    while (leftIndex >= 0) {
        // left从原来字符串的末尾向前遍历 right从新的字符串的末尾向前遍历 填充
        // case1 遇到了空格
        if (arr[leftIndex] === BlANK) {
            // 其实 不扩容也可以 这里直接arr[leftIndex] = '20%'
            arr[rightIndex--] = '0';
            arr[rightIndex--] = '2';
            arr[rightIndex--] = '%';
            leftIndex--;
            continue;
        }
        // case2 遇到了非空格
        arr[rightIndex--] = arr[leftIndex--];
    }
    // return 
    return arr.join('');
};