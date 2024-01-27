/**
 * leet: https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/
 * Date: 2022-3-2
 * kaer: https://programmercarl.com/0017.%E7%94%B5%E8%AF%9D%E5%8F%B7%E7%A0%81%E7%9A%84%E5%AD%97%E6%AF%8D%E7%BB%84%E5%90%88.html
 */

/**
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
  // defend
  if (digits.length === 0) return [];
  // init data
  const res = [];
  // 建立数字到字母的映射
  const digist2StrArray = [
      "", // 0
      "", // 1
      "abc", // 2
      "def", // 3
      "ghi", // 4
      "jkl", // 5
      "mno", // 6
      "pqrs", // 7
      "tuv", // 8
      "wxyz", // 9
  ];
  // algo
  /**
   * @param {} index ⭕️当前按键数字在digists中的下标， 不是之前组合中的startIndex
   */
  const backTrack = (path, index) => {
      // base case + 在叶子节点 将当前路径加入结果
      if (path.length === digits.length) {
          res.push(path.join(''));
          return;
      }

      const curStr = digist2StrArray[+digits[index]]; // 当前层（按键）上的字符串(当前数字对应的那一组字符串)
      // 遍历该层
      for (let i = 0; i < curStr.length; i++) {
          // 作出选择
          path.push(curStr[i]);
          // 遍历下一层: 注意 这里是遍历下一个数字，用的是index, 而不是i
          backTrack(path, index + 1);
          // 回溯条件
          path.pop();
      }
  }

  // 调用回溯
  backTrack([], 0);

  // return
  return res;
};