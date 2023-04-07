/**
 * leet: https://leetcode-cn.com/problems/valid-anagram/
 * Date: 2022-2-16
 * kaer: https://programmercarl.com/0242.%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D.html#_242-%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D
 */


/**
 * 方法2： 利用数组+ascll构造hash
 * 这里使用通过字符ascll产生数组下标,生成数组 对比t
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  // defend
  if (s.length !== t.length) return false;
  // init data
  const ascllArr = new Array(26).fill(0); // 下标为ascll-'a'的ascll 
  const baseAscll = 'a'.charCodeAt();
  // algo
  // 1. 利用s构建对应的查表：ascllArr
  for (const sChar of s) {
      ascllArr[sChar.charCodeAt() - baseAscll]++;
  }
  // 2. 用ascllArr对比t
  for (const tChar of t) {
      // 当前t的字符在arr中出现的频率为0或者不存在 则表明s t不相配了
      if (!ascllArr[tChar.charCodeAt() - baseAscll]) return false;
      ascllArr[tChar.charCodeAt() - baseAscll]--;
  }
  // return 
  return true;
};

/**
 * 方法1：使用map
 * 利用s构建出一个查的表 
 * 然后遍历t来用查表检查t
 * 通过检查 就是异位词
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isAnagram = function(s, t) {
  // defend
  if (s.length !== t.length) return false;
  // init data
  const map = new Map(); // char => count, 字符：出现的次数
  // algo
  // 1. 构建查表：通过s构造其字符和其出现次数的map
  for (const char of s) {
      const preCount = map.get(char) || 0;
      map.set(char, preCount + 1);
  }
  // 2. 利用s生成的map 来对比t
  for (const char of t) {
      if (!map.has(char)) return false;
      if (map.get(char) > 0) {
          map.set(char, map.get(char) - 1); // 遇到相同的 该字符数量-1
          if (map.get(char) === 0) {
              map.delete(char); // 减到0 则该字符在s中已经穷尽了
          }
      }
  }
  // return 通过了遍历对比 就是true
  return map.size === 0;
};