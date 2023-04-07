/**
 * leet: https://leetcode-cn.com/problems/group-anagrams/
 * Date: 2022-2-16
 * kaer: https://programmercarl.com/0242.%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D.html#%E7%9B%B8%E5%85%B3%E9%A2%98%E7%9B%AE
 */

(() => {
  Map.prototype.$addStr = function (key, str) {
      const originalVal = this.get(key) || [];
      originalVal.push(str);
      this.set(key, originalVal); // 例如originalVal是[]的情况 还未挂载到this上
  }
})()

/**
 * dong: 异位词这类问题的关键在于，你如何迅速判断两个字符串是异位词。
 * 一般的思路是对字符串进行编码，编码方式可以是多样的，只要使得异位词的编码结果相同即可。
 * 
 * 核心就是：通过编码生成每一个异位词的编码(hash值)作为map的key,这样编码一致的都放在同样的key下 自然就分组了
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
      const key = encode(str);
      resMap.$addStr(key, str);
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