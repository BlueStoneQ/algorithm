/**
 * 2021-6-1
 * c/C++的atio函数
 * 将字符转为数字
 */

/**
 * 裁剪一个数字字符串
 * 1. 超出Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER时 分别返回边界值Number.MAX_SAFE_INTEGER和Number.MIN_SAFE_INTEGER
 */
const cutNumStr = () => {
  Number.MIN_SAFE_INTEGER
}

/**
 * 算法1：快慢双指针
 * 1. 去除前后空格
 * 2. 判断正负
 * 3. 大小范围判断，超出裁剪[up]
 * @param {*} str 
 */
 const myAtio = (str) => {
   const res = str.trim();
   const isNegative = res[0] === '-';
   // 大数裁剪 - 将正负边界值处理为str进行比较算法
   if (isNegative) {
   } else {}
   // 将裁剪后的str逐位处理为num,注意进位处理
   return res;
 }


(() => {
  const input1 = ' -42  ';
  console.log(`expect myAtio(${input1}): `, myAtio(input1));
})()
