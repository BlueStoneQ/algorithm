/**
 * 2021-6-2
 * 在haystack中找出needle第一次出现的位置
 * 例如：haystack = 'ahnsg' needle="ns" 则返回 2
 * 1. needle为空串时 返回0
 * 2. 未找到 返回-1
 * me: 本题的本质是模式匹配
 * 参考：
 * 1. https://zhuanlan.zhihu.com/p/24649304
 */

/**
 * 算法1：
 * BF
 * 先用暴力双层循环，其实这道题的本质是模式匹配，KMP算法等
 * @param {*} haystack 在该字符串中查找，相当于source
 * @param {*} needle 被查找的字符串，相当于match
 */
 const strStr = (haystack, needle) => {
   if (needle.trim() === '') return 0;
   const haystackLen = haystack.length;
   const needleLen = needle.length;
   for (let i = 0; i < haystackLen; i++) {
     let j = 0;
     // 重要地是理解匹配过程 2个指针之间的变化规律 之间的联系
     while(haystack[i+j] === needle[j]) {
       if (j === needleLen-1) {
         // 匹配到了 返回i
         return i;
       }
       j++;
     }
   }
   // 遍历完haystack没有match的情况出现 返回-1
   return -1;
 }

 /**
  * 算法2：
  * KMP
  */


(() => {
  const haystack = 'abcdef';
  const needle = 'de';
  console.log(`expect strStr(${haystack}, ${needle}): `, strStr(haystack, needle));
})()