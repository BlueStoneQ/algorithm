/**
 * 2021-5-26
 * 翻转一个有符号整数
 * 1. 注意：翻转后的数字大小不要超过有符号整数的范围()
 */
const { reversalStr1 } = require('../reversalStr/index');

/**
 * 算法1
 * 1. 把数组转成string，然后进一步转为array, 
 * 2. 翻转后的数组进行处理：
 *  - 前面的0去掉
 *  - 大小不能超过有符号整形的范围
 * 3. 将合法的str转为数字输出
 */
const reversalNum1 = (num) => {
  const arr = (''+num).split('');
  // 翻转字符串
  reversalStr1(arr);
  // 处理翻转后的字符串
  let i  = 0;
  while(i < arr.length) {
    if (+arr[i] !== 0) {
      break;
    }
    i++;
  }
  // i+1就是前面0的个数 index: [0~i]
  // 1. 前面的0去掉
  arr.splice(0, i)
  const num = +(arr.join(''));
  // 2. 大小校验 - 这里这样直接比较大小应该是不对的 应该用数组设计比较算法
  if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
    // 超出了js的最大数范围
    return;
  }
  // 转成(->字符串->)数字，返回
  return num;
}

(() => {
  const input1 = 1234500;
  console.log(`expect reversalNum1(${input1})：${reversalNum1(input1)}`);
})()