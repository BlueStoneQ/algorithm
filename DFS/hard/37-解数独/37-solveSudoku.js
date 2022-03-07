/**
 * leet: https://leetcode-cn.com/problems/sudoku-solver/
 * 2022-3-7
 * 主体思路：dong: https://labuladong.gitee.io/algo/4/30/113/
 * isValid()的思路： kaer: https://programmercarl.com/0037.%E8%A7%A3%E6%95%B0%E7%8B%AC.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E7%89%88%E6%9C%AC
 */

 const BLANK_SIGN = '.';

 /**
  * 很像棋盘，也就是二维数组（矩阵）, 9 * 9 的矩阵
  * 一行一行去铺
  * @param {character[][]} board
  * @return {void} Do not return anything, modify board in-place instead.
  */
 var solveSudoku = function(board) {
     // defend
     // init data
 
     // algo
     /**
      * 定义：递归回溯函数
      * @param {number} row 从0开始计数
      * @param {number} col 从0开始计数
      */
     const backtrack = function(row, col) {
         // base case 1 穷举到最后一列 就换行到下一行重新开始
         if (col === 9) {
             return backtrack(row + 1, 0);
         };
 
         // base case 2 穷举到最后一行 则找到了唯一解 返回true 停止继续遍历
         if (row === 9) {
             return true; // 数独只有唯一解 当遍历过最后一行后 这里返回true 代表找到了唯一解
         };
 
         // base case 如果该位置有预设数字 不用穷举,尝试填充该行的下一列
         if (board[row][col] !== BLANK_SIGN) {
             return backtrack(row, col + 1);
         }
 
         // 单层逻辑: 尝试确定 result[row][col]的值
         // 循环 枚举[1, 9]中每一个数字
         for (let i = 1; i <= 9; i++) {
             const char = `${i}`;
             // 判断
             if (!isValid(board, row, col, char)) continue;
             // 作出选择
             board[row][col] = char;
             // 递归遍历下一层(下一列)
             if (backtrack(row, col + 1) === true) return true;
             // 撤销选择
             board[row][col] = BLANK_SIGN;
         }
     }
 
     // 调用递归回溯函数
     backtrack(0, 0);
 
     // return
     return board;
 };
 
 /**
  * 判断在board中row, col位置是否可以填入字符char
  */
 function isValid(board, row, col, char) {
     // case1 数字 1-9 在每一行只能出现一次
     for (let i = 0; i < 9; i++) {
         if (board[row][i] === char) return false;
     }
     // case2 数字 1-9 在每一列只能出现一次。
     for (let i = 0; i < 9; i++) {
         if (board[i][col] === char) return false;
     }
     // case3 数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次 (可以画图看看)
     // Math.floor(row/3) 可以确定在第几个3*3矩阵中
     const startRow = Math.floor(row/3) * 3;
     const startCol = Math.floor(col/3) * 3;
     for (let r = startRow; r < startRow + 3; r++) {
         for (let c = startCol; c < startCol + 3; c++) {
             if (board[r][c] === char) return false;
         }
     }
 
     // 经过前面重重检查 就是合法的
     return true;
 }