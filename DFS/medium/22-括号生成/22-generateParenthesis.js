/**
 * leet: https://leetcode-cn.com/problems/generate-parentheses/
 * 2022-3-7
 * dong: https://labuladong.gitee.io/algo/4/30/114/
 */


 const LEFT_PAR = '(';
 const RIGHT_PAR = ')';
 
 /**
  * 枚举所有可能性：回溯
  * 理解题：现在有 2n 个位置，每个位置可以放置字符 ( 或者 )，组成的所有括号组合中，有多少个是合法的？
  * @return {string[]}
  */
 var generateParenthesis = function(n) {
     // defend
     // init data
     const result = [];
     const parList = [LEFT_PAR, RIGHT_PAR];
     // algo
     /**
      * 定义递归回溯函数：
         * @param {array} path 一个枚举情况
         * @param {number} needLeftParCount 当前还需要的左括号个数
         * @param {number} needRightParCount 当前还需要的右括号个数
      */
     const backtrack = function(path, needLeftParCount, needRightParCount) {
     // base case1: 判断是否合法: 如果把当前par加入到path中 是否合法
 
         // base case1: 如果需要的左括号数量 > 需要的右括号的数量 则证明当前路径 右括号在前面多了 不合法了 ))(
         if (needLeftParCount > needRightParCount) return;
 
         // base case2: 左右括号其中有一方小于0 则不合法 （不能再组成合法括号了 - 这个路径走下去无意义）
         if (needLeftParCount < 0 || needRightParCount < 0) return;
 
         // base case2: 需要的左右括号刚好均为0 则该path满足情况 + 记录结果
         if (needLeftParCount === 0 && needRightParCount === 0) {
             result.push(path.join(''));
             return;
         }
 
         // 单层遍历: 一共有2种括号 “(” 和 “)”
         for (let par of parList) {
             // 作出选择
             path.push(par);
             // 遍历下一层
             if (par === LEFT_PAR) {
                 // 尝试放一个左括号
                 backtrack(path, needLeftParCount - 1, needRightParCount);
             } else {
                 // 尝试放一个右括号
                 backtrack(path, needLeftParCount, needRightParCount - 1);
             }
             // 撤销选择
             path.pop();
         }
     }
 
     backtrack([], n, n);
 
     // return 
     return result;
 };