/**
 * leet: https://leetcode-cn.com/problems/group-anagrams/
 * Date: 2022-2-16
 * kaer: https://programmercarl.com/0242.%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D.html#%E7%9B%B8%E5%85%B3%E9%A2%98%E7%9B%AE
 */

/**
 * dong: 异位词这类问题的关键在于，你如何迅速判断两个字符串是异位词。
 * 一般的思路是对字符串进行编码，编码方式可以是多样的，只要使得异位词的编码结果相同即可。
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
  // defend
  // init data
  const res = [];
  const resMap = new Map(); // 字符串编码: 符合该字符串编码的字符串
  // algo
  for (const str of strs) {
      const curStrCode = encode(str);
      const curStrArr = resMap.get(curStrCode) || [];
      curStrArr.push(str)
      resMap.set(curStrCode, curStrArr);
  }

  // 遍历map 生成 Array
  for (const val of resMap.values()) {
      res.push(val);
  }

  // return 
  return res;
};

/**
* 关键：根据每个字符的相对acll + 出现次数 编码该字符串
* 所有的异位词：编码是一样的
*/
function encode(s) {
  const charCodeArr = new Array(26).fill(0);
  const baseCode = 'a'.charCodeAt();

  for (const char of s) {
      charCodeArr[char.charCodeAt() - baseCode]++;
  }

  return charCodeArr.toString(); // 注意：不要用join(''), '10'和'1, 0' 都会被打成'10' 发生hash碰撞
}