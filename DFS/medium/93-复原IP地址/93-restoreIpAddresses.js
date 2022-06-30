/**
 * leet: https://leetcode-cn.com/problems/restore-ip-addresses/
 * Date: 2022-3-6
 * kaer: https://programmercarl.com/0093.%E5%A4%8D%E5%8E%9FIP%E5%9C%B0%E5%9D%80.html#python
 * 题型：回溯-组合枚举
 */


/**
 * 本题很明显是分割字符串的变形 - 分割字符串是组合问题的变形，或者另一种叙述方法
 * 时间：
 * 空间：
 * @param {string} s
 * @return {string[]}
 */
 var restoreIpAddresses = function(s) {
  // defend
  // init data
  const sLen = s.length;
  const result = [];
  // algo
  /**
   * 定义回溯函数
   * @param {Array} path 表示一个ip的情况 数组形式 例如['127', '127', '127', '0']
   */
  const backTrack = function(path, startIndex) {
      // base case + 记录结果  [!!!]注意 path.length === 4 这个 条件
      if (startIndex === sLen && path.length === 4) {
          result.push(path.join('.'));
          return;
      }
      // 单层遍历逻辑
      for (let i = startIndex; i < sLen; i++) {
          // 获取当前的ip段 判断是否合法 例如：'12' '127' 不合法则直接跳过本次循环
          const curNumStr = s.substring(startIndex, i + 1);

          if (!isValidIPNumber(curNumStr)) continue;

          // 作出选择
          path.push(curNumStr);
          // 递归遍历下一层
          backTrack(path, i + 1);
          // 撤销选择
          path.pop();
      }
  }
  // 调用回溯函数 传入初始值
  backTrack([], 0);
  // return 
  return result;
};

/**
* 判断输入的字符串是不是合法的ip 数字
* 用字符串是为了表示01 这种情况
*/
function isValidIPNumber(str) {
  if (!str) return false;

  const num = +str;

  if (num < 0 || num > 255) return false;

  if (/^0+\S+/.test(str)) return false;

  return true;
}
