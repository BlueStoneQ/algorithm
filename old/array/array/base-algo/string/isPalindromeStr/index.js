/**
 * 2021-6-1
 * 判断是否为回文串
 */

/**
 * 算法1：快慢双指针
 * @param {*} str 
 */
const isPalindromeStr1 = (str) => {
  // 防御为空的情况 暂时未true吧
  const len = str.length;
  if (len === 0) return true;
  for (let i = 0; i < Math.floor(len/2); i++) {
    // 用i 和 len-i-1分别从2端进行会问比较 发现有一个不一样就返回false
    if (str[i] !== str[len-i-1]) return false;
  }
  return true;
}


(() => {
  const inputTrue = 'abcdcba';
  const inputFalse = 'abcdbca';
  console.log(`expect isPalindromeStr1(${inputTrue}): `, isPalindromeStr1(inputTrue));
  console.log(`expect isPalindromeStr1(${inputFalse}): `, isPalindromeStr1(inputFalse));
})()