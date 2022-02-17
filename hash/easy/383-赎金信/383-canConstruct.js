/**
 * leet: https://leetcode-cn.com/problems/ransom-note/
 * Date: 2022-2-17
 * kaer: https://programmercarl.com/0383.%E8%B5%8E%E9%87%91%E4%BF%A1.html#%E5%93%88%E5%B8%8C%E8%A7%A3%E6%B3%95
 */

/**
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
      ransomNoteMap.set(char, (ransomNoteMap.get(char) || 0) + 1);
  }
  // algo
  for (const char of magazine) {
      if (ransomNoteMap.has(char)) {
          const originalCount = ransomNoteMap.get(char);
          ransomNoteMap.set(char, originalCount - 1);
          if (ransomNoteMap.get(char) === 0) {
              ransomNoteMap.delete(char);
          }
          if (ransomNoteMap.size === 0) return true;
      }
  }
  // return 
  return ransomNoteMap.size === 0;
};