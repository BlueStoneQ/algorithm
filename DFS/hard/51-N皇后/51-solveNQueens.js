/**
 * leet: https://leetcode-cn.com/problems/n-queens/
 * 2022-3-1
 * 题解：
 * 0. [dong-主体思路](https://mp.weixin.qq.com/s?__biz=MzAxODQxMDM0Mw==&mid=2247484709&idx=1&sn=1c24a5c41a5a255000532e83f38f2ce4&scene=21#wechat_redirect)
 * 1. [代码随想录-细节实现](https://programmercarl.com/0051.N%E7%9A%87%E5%90%8E.html#%E5%85%B6%E4%BB%96%E8%AF%AD%E8%A8%80%E8%A1%A5%E5%85%85)
 */

 const Q = 'Q'; // 皇后的占位符
 const BLANK = '.';
 
 /**
  * @param {number} n
  * @return {string[][]}
  */
 var solveNQueens = function(n) {
     // defend
     // init data
     const res = [];
     const board = [];
     for (let i = 0; i < n; i++) {
         board[i] = new Array(n).fill(BLANK);
     }
     // algo
     /**
      * 定义：辅助递归函数
      * 每次调用 就是在当前row行 放置一枚皇后
      */
     const _solveNQueens = function(board, row) {
         // base case: 因为下标是从0起的 所以 这里的边界是 n - 1
         if (row === n) {
             // 这一个放置的方法穷尽了 引用类型 ！！！这里必须进行复制
             res.push(transformBoard2ResCBoard(board));
             return;
         }
 
         // 递归调用
         for (let col = 0; col < n; col++) {
             // 判断皇后放在当前是否合法 不合法 则本次循环不必继续下了（这个路径不必探索下去了）
             if (!isValid(board, row, col)) continue;
 
             // 作出选择 生成下一行参数
             board[row][col] = Q;
             // 递归调用：放置下一行
             _solveNQueens(board, row + 1);
             // 撤销选择 进行下一个行的可能性枚举
             board[row][col] = BLANK;
         }
     }
     // 调用：辅助递归函数
     _solveNQueens(board, 0); // 下标和数组统一 从0起步 [0, n-1]
 
     return res;
 };
 
 /**
  * 判断这个位置如果放置皇后 是否合法
  * @return {bool} true: 合法
  */
  function isValid(board, row, col) {
      // 当前列上有皇后则return false （当前行也不需要检查 因为现在还未放置）
      const boardSize = board.length;
 
      for (let i = 0; i < boardSize; i++) {
          if (board[i][col] === Q) {
              return false;
          }
      }
      // 当前位置的 左上  右上 不限格数  只要有一个有皇后 就return false （左下 右下不用检查 因为还没放置皇后）
      // 检查左上方是否有皇后 i 遍历 row, j 遍历 col
      for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
         if (board[i][j] === Q) return false;
      }
      // 检查右上方是否有皇后
     for (let i = row - 1, j = col + 1; i >= 0 && j < boardSize; i--, j++) {
         if (board[i][j] === Q) return false;
     }
     
      // 经过前面检测 则剩余case 就是合法的了
      return true;
  }
 
  /**
   * 将计算用的board [[], []]转变为结果要的格式['', ''], 并进行拷贝 斩断与input.board的引用关系
   */
 function transformBoard2ResCBoard(board) {
     return board.map(row => row.join(''));
 }