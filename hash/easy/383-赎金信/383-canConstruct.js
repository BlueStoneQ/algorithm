/**
 * leet: https://leetcode-cn.com/problems/ransom-note/
 * Date: 2022-2-17
 * kaer: https://programmercarl.com/0383.%E8%B5%8E%E9%87%91%E4%BF%A1.html#%E5%93%88%E5%B8%8C%E8%A7%A3%E6%B3%95
 */

// 构造一个hash 查表，如果是纯英文字母，我们可以使用ascll码作为index的array来构建，这里我们采用Map
(() => {
    Map.prototype.$addCount = function (key, count) {
        const originalCount = this.get(key) || 0;
        this.set(key, originalCount + count);
    }
})()


/**
 * 方法1： 使用map来作查找表 但是 底层消耗可能会较高
 * me: 这道题很像异位词 但是其实是判断 magzine 是不是 ransomNote的超集，也就是说数量不要求相等
 * 我们依然先构建要查找的目标字符串的map, 并统计其每个字符出现的次数（可以理解为一种编码）
 * 然后再遍历源字符串 用这个map去查 每查到一个合法字符 就把这个字符数量记录减一，如果map该数量减到了0 则该字符可以delete掉,当然 如果遍历中发现map为空 也可以提前return true掉
 * 最终结果判断map是否为空即可
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  // defend
  if (ransomNote.length > magazine.length) return false;
  // init data
  const ransomNoteMap = new Map();
  for (const char of ransomNote) {
      ransomNoteMap.$addCount(char, 1);
  }
  // algo
  for (const char of magazine) {
      if (ransomNoteMap.has(char)) {
          ransomNoteMap.$addCount(char, -1);
          if (ransomNoteMap.get(char) === 0) {
              ransomNoteMap.delete(char);
          }
          if (ransomNoteMap.size === 0) return true;
      }
  }
  // return 
  return ransomNoteMap.size === 0;
};


/**
 * 方法2：Array + ascll构建hash作为查找表
 * 字符串 尤其是强调小写的字符串 则使用数组+ascll码建立hash
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function(ransomNote, magazine) {
  // defend
  // init data
  const charArr = new Array(26).fill(0); // 26个小写字母的ascll码刚好映射出26个位置
  const baseAscll = 'a'.charCodeAt();
  for (const mChar of magazine) {
      charArr[mChar.charCodeAt() - baseAscll]++;
  }
  // algo
  for (const rChar of ransomNote) {
      const curIndex = rChar.charCodeAt() - baseAscll;
      if (charArr[curIndex] === 0) return false;
      charArr[curIndex]--;
  }
  // return 
  return true;
};